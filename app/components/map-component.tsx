'use client'

import { useEffect, useRef, useCallback } from 'react'
import L from 'leaflet'

interface Props {
  onRegionHover: (name: string | null) => void
  onRegionClick: (name: string | null) => void
}

const pins = [
  {
    name: 'Greater Boston',
    position: [42.3601, -71.0589] as [number, number],
    cities: 'Boston · Cambridge · Somerville · Medford · Chelsea · Newton · Brookline · Waltham · Quincy · Braintree · Milton · Dedham',
  },
  {
    name: 'North Shore & Coastal',
    position: [42.5195, -70.8967] as [number, number],
    cities: 'Salem · Peabody · Beverly · Marblehead · Swampscott · Nahant · Danvers · Saugus · Lynnfield · Gloucester · Rockport · Manchester · Ipswich · Hamilton · Wenham · Topsfield',
  },
  {
    name: 'Merrimack Valley',
    position: [42.6583, -71.1368] as [number, number],
    cities: 'Andover (Base) · N. Andover · Lawrence · Lowell · Haverhill · Methuen · Amesbury · Newburyport · Groton · Boxford · Winchester · Lexington · Middleton · Reading · Wilmington · Carlisle · W. Newbury · N. Reading',
  },
  {
    name: 'Southern New Hampshire',
    position: [42.8500, -71.3500] as [number, number],
    cities: 'Salem · Windham · Bedford · Londonderry · Pelham · Portsmouth · Rye · North Hampton · Hollis · Hampstead · Derry · Hudson · Merrimack · Atkinson',
  },
]

export default function MapComponent({ onRegionHover, onRegionClick }: Props) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    // Dynamic Preconnects
    const origins = [
      'https://a.basemaps.cartocdn.com',
      'https://b.basemaps.cartocdn.com',
      'https://c.basemaps.cartocdn.com',
      'https://d.basemaps.cartocdn.com',
    ]
    const links: HTMLLinkElement[] = []
    origins.forEach(origin => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = origin
      document.head.appendChild(link)
      links.push(link)
    })

    // Dynamic Leaflet CSS
    const cssLink = document.createElement('link')
    cssLink.rel = 'stylesheet'
    cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    cssLink.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
    cssLink.crossOrigin = ''
    document.head.appendChild(cssLink)

    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
      if (cssLink.parentNode) {
        cssLink.parentNode.removeChild(cssLink)
      }
    }
  }, [])

  const initMap = useCallback(() => {
    if (!mapContainerRef.current || initializedRef.current) return
    initializedRef.current = true

    const map = L.map(mapContainerRef.current, {
      center: [42.60, -71.12],
      zoom: 9,
      scrollWheelZoom: false,
      zoomControl: true,
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
    })

    mapInstanceRef.current = map

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 14,
    }).addTo(map)

    // Custom gold pulsing icon
    const goldIcon = L.divIcon({
      className: 'blu-map-pin',
      html: `
        <div style="position:relative;width:28px;height:28px;cursor:pointer;">
          <div style="
            position:absolute;
            inset:-6px;
            border-radius:50%;
            background:rgba(228,185,115,0.25);
            animation:bluPing 1.5s cubic-bezier(0,0,0.2,1) infinite;
          "></div>
          <div style="
            width:28px;height:28px;border-radius:50%;
            background:#E4B973;
            border:3px solid #fff;
            box-shadow:0 0 18px rgba(228,185,115,0.8);
            display:flex;align-items:center;justify-content:center;
          ">
            <div style="width:8px;height:8px;border-radius:50%;background:#060D1C;"></div>
          </div>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -18],
    })

    pins.forEach((pin) => {
      const marker = L.marker(pin.position, { icon: goldIcon }).addTo(map)

      marker.bindPopup(`
        <div style="background:#0A1224;border:1px solid rgba(228,185,115,0.3);padding:16px;border-radius:12px;box-shadow:0 0 20px rgba(0,0,0,0.8);width:210px;white-space:normal;">
          <strong style="color:#E4B973;display:block;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;font-weight:800;">
            ${pin.name}
          </strong>
          <p style="color:rgba(255,255,255,0.8);font-size:12px;line-height:1.6;margin:0;padding:0;">
            ${pin.cities}
          </p>
        </div>
      `, {
        offset: [0, 0],
        className: 'custom-map-popup',
        autoPanPadding: L.point(20, 20),
      })

      marker.on('mouseover', () => onRegionHover(pin.name))
      marker.on('mouseout', () => onRegionHover(null))
      marker.on('click', () => onRegionClick(pin.name))
    })

    // Force recalculation after layout settles
    const timer = setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize()
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [onRegionHover, onRegionClick])

  useEffect(() => {
    const cleanup = initMap()

    return () => {
      if (cleanup) cleanup()
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        initializedRef.current = false
      }
    }
  }, [initMap])

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '16px',
        minHeight: '400px',
      }}
    />
  )
}
