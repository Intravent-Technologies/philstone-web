export interface Review {
  id: string;
  quote: string;
  rating: number;
  date: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    quote: 'Philstone Consulting transformed our project management capabilities. Their team\'s expertise in PMP training and Agile implementation helped us achieve results we never thought possible. Highly recommended!',
    rating: 5,
    date: '2026-03-15',
  },
  {
    id: '2',
    quote: 'The AI transformation program delivered exceptional results. Our process efficiency improved by 60% within the first quarter. The ROI exceeded our expectations.',
    rating: 5,
    date: '2026-02-28',
  },
  {
    id: '3',
    quote: 'Outstanding training programs. Our team is now certified and confident in applying Lean Six Sigma methodologies. The practical approach made all the difference.',
    rating: 5,
    date: '2026-02-10',
  },
  {
    id: '4',
    quote: 'Working with Philstone was a game-changer for our organisation. Their consulting expertise helped us navigate complex challenges with confidence.',
    rating: 5,
    date: '2026-01-25',
  },
];

export function getAllReviews(): Review[] {
  return reviews;
}
