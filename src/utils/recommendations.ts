interface Choices {
  beach?: string;
  activity?: string;
  budget?: string;
}

const destinations = {
  beach: {
    adventure: {
      low: {
        destination: "Goa, India",
        description: "Experience the vibrant beach life and water sports while exploring local markets and street food scenes.",
        activities: ["parasailing", "beach hopping", "night markets"]
      },
      medium: {
        destination: "Bali, Indonesia",
        description: "Discover perfect waves for surfing, ancient temples, and exciting water sports activities.",
        activities: ["surfing", "temple visits", "snorkeling"]
      },
      high: {
        destination: "Maldives",
        description: "Enjoy luxury water villas while participating in world-class diving and water sports.",
        activities: ["scuba diving", "jet skiing", "island hopping"]
      }
    },
    relaxation: {
      low: {
        destination: "Puerto Escondido, Mexico",
        description: "Unwind on peaceful beaches and enjoy authentic Mexican cuisine.",
        activities: ["sunbathing", "beach yoga", "local cuisine"]
      },
      medium: {
        destination: "Greek Islands",
        description: "Experience the Mediterranean lifestyle with beautiful beaches and charming villages.",
        activities: ["beach relaxation", "local wine tasting", "boat tours"]
      },
      high: {
        destination: "Seychelles",
        description: "Indulge in ultimate luxury on pristine private beaches surrounded by natural beauty.",
        activities: ["spa treatments", "private beach access", "sunset cruises"]
      }
    }
  },
  mountains: {
    adventure: {
      low: {
        destination: "Himachal Pradesh, India",
        description: "Trek through beautiful valleys and experience local mountain culture on a budget.",
        activities: ["hiking", "camping", "local festivals"]
      },
      medium: {
        destination: "Colorado, USA",
        description: "Enjoy year-round mountain activities with great infrastructure and stunning views.",
        activities: ["rock climbing", "mountain biking", "hiking"]
      },
      high: {
        destination: "Swiss Alps",
        description: "Experience premium mountain adventures with world-class facilities and breathtaking scenery.",
        activities: ["skiing", "paragliding", "luxury chalets"]
      }
    },
    relaxation: {
      low: {
        destination: "Cameron Highlands, Malaysia",
        description: "Enjoy cool mountain air, tea plantations, and peaceful nature walks.",
        activities: ["tea tasting", "nature walks", "photography"]
      },
      medium: {
        destination: "Blue Mountains, Australia",
        description: "Relax in mountain resorts while enjoying spectacular valley views and wildlife.",
        activities: ["spa visits", "scenic railway", "bush walks"]
      },
      high: {
        destination: "Banff, Canada",
        description: "Indulge in luxury mountain lodges with hot springs and incredible mountain vistas.",
        activities: ["hot springs", "gondola rides", "fine dining"]
      }
    }
  }
};

export function generateRecommendation(choices: Choices): string {
  const { beach, activity, budget } = choices;
  const location = beach?.toLowerCase() === 'beach' ? 'beach' : 'mountains';
  const activityType = activity?.toLowerCase() || '';
  const budgetLevel = budget?.toLowerCase() || '';

  const recommendation = destinations[location]?.[activityType]?.[budgetLevel];

  if (!recommendation) {
    return "We couldn't generate a recommendation based on your choices. Please try again.";
  }

  return `Based on your preferences, we recommend visiting ${recommendation.destination}! 
  ${recommendation.description}
  
  Suggested activities include: ${recommendation.activities.join(', ')}.
  
  This destination perfectly matches your preference for ${location}s, desire for ${activityType}, 
  and ${budgetLevel} budget requirements.`;
}