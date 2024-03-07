export const yelpSorting = [
    {
        name: 'Best Match',
        value: 'best_match'
    },
    {
        name: 'Rating',
        value: 'rating',
        function: (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
    },
    {
        name: 'Review count',
        value: 'review_count',
        function: (a, b) => b.reviewCount - a.reviewCount || b.rating - a.rating,
    }
];