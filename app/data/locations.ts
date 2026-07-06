export interface CityData {
  name: string;
  slug: string;
  region: string;
  state: string;
  zipCode?: string;
  description?: string;
}

export const locations: CityData[] = [
  // Greater Boston
  { name: 'Boston', slug: 'boston-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Cambridge', slug: 'cambridge-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Somerville', slug: 'somerville-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Medford', slug: 'medford-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Chelsea', slug: 'chelsea-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Newton', slug: 'newton-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Brookline', slug: 'brookline-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Waltham', slug: 'waltham-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Quincy', slug: 'quincy-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Braintree', slug: 'braintree-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Milton', slug: 'milton-ma', region: 'Greater Boston', state: 'MA' },
  { name: 'Dedham', slug: 'dedham-ma', region: 'Greater Boston', state: 'MA' },

  // North Shore
  { name: 'Salem', slug: 'salem-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Peabody', slug: 'peabody-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Beverly', slug: 'beverly-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Marblehead', slug: 'marblehead-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Swampscott', slug: 'swampscott-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Nahant', slug: 'nahant-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Danvers', slug: 'danvers-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Saugus', slug: 'saugus-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Lynnfield', slug: 'lynnfield-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Gloucester', slug: 'gloucester-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Rockport', slug: 'rockport-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Manchester-by-the-Sea', slug: 'manchester-by-the-sea-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Ipswich', slug: 'ipswich-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Hamilton', slug: 'hamilton-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Wenham', slug: 'wenham-ma', region: 'North Shore & Coastal', state: 'MA' },
  { name: 'Topsfield', slug: 'topsfield-ma', region: 'North Shore & Coastal', state: 'MA' },

  // Merrimack Valley
  { name: 'Andover', slug: 'andover-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'North Andover', slug: 'north-andover-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Lawrence', slug: 'lawrence-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Lowell', slug: 'lowell-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Haverhill', slug: 'haverhill-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Methuen', slug: 'methuen-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Amesbury', slug: 'amesbury-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Newburyport', slug: 'newburyport-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Groton', slug: 'groton-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Boxford', slug: 'boxford-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Winchester', slug: 'winchester-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Lexington', slug: 'lexington-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Middleton', slug: 'middleton-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Reading', slug: 'reading-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Wilmington', slug: 'wilmington-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'Carlisle', slug: 'carlisle-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'West Newbury', slug: 'west-newbury-ma', region: 'Merrimack Valley', state: 'MA' },
  { name: 'North Reading', slug: 'north-reading-ma', region: 'Merrimack Valley', state: 'MA' },

  // Southern NH
  { name: 'Salem', slug: 'salem-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Windham', slug: 'windham-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Bedford', slug: 'bedford-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Londonderry', slug: 'londonderry-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Pelham', slug: 'pelham-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Portsmouth', slug: 'portsmouth-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Rye', slug: 'rye-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'North Hampton', slug: 'north-hampton-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Hollis', slug: 'hollis-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Hampstead', slug: 'hampstead-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Derry', slug: 'derry-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Hudson', slug: 'hudson-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Merrimack', slug: 'merrimack-nh', region: 'Southern New Hampshire', state: 'NH' },
  { name: 'Atkinson', slug: 'atkinson-nh', region: 'Southern New Hampshire', state: 'NH' },
];
