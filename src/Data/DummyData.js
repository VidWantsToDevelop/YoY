import Subary from '../components/Subary'
import PostDuck from '../components/PostDuck'
import HappyDuck from '../components/HappyDuck'

const Data = [
  {
    duckName: 'Happy duck',
    description: 'Sincerely happy duck',
    model: <HappyDuck />,
  },
  {
    duckName: 'Post Duck',
    description:
      'A great example of the hard-working duck. This duck wakes up early in the morning to deliver all the letters to the other citizens of the DuckVille. Unlike other ducks, Post Duck is always in a great mood and ready to help others.',
    model: <PostDuck />,
  },
  {
    duckName: 'Subary',
    description: 'Probably, the coolest duck you will ever see',
    model: <Subary />,
  },
]

export { Data }
