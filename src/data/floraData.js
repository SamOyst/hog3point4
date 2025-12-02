// Data module for the Flora/Fauna/Fungi gallery.
// Exports an array of items used by src/components/flora.js.
// Each item object has:
//  - name: string, display name
//  - category: string, one of 'Flora' | 'Fauna' | 'Fungi' (used by filters)
//  - description: string, shown on hover/expanded view
//  - image: import pointing to an asset used as the item's thumbnail

import alder from '../assets/alderFlycatcher.jpg';
import smelt from '../assets/rainbowSmelt.png';
import yellowBirch from '../assets/coastalYellowBirch.jpg';

const data = [
  {
    name: 'Alder Flycatcher',
    category: 'Fauna', // used by category filter buttons
    description: 'Placeholder description for Alder Flycatcher.',
    image: alder, // imported asset
  },
  {
    name: 'Coastal Yellow Birch',
    category: 'Flora',
    description: 'Placeholder description for Coastal Yellow Birch.',
    image: yellowBirch,
  },
    {
    name: 'Rainbow Smelt',
    category: 'Fauna',
    description: 'Placeholder description for Rainbow Smelt.',
    image: smelt,
  },
];

// Add new items here following the same structure.
// Keep `category` strings consistent with the filter list in the component.
export default data;
