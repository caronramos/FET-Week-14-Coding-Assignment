import PG from './images/PG.png'
import Fourstars from './images/Fourstars.png'
import PGThirteen from './images/PGThirteen.png'
import Fourhalfstars from './images/Fourhalfstars.png'
import TVFourteen from './images/TVFourteen.png'

export const storage =
[
    {
        "id": 1,
        "key": 1,
        "title": "Pride and Prejudice",
        "ratingImage": PG,
        "imdbRating": Fourstars,
        "description": "In this adaptation of Jane Austen's beloved novel, Elizabeth Bennet (Keira Knightley) lives with her mother, father and sisters in the English countryside. As the eldest, she faces mounting pressure from her parents to marry. When the outspoken Elizabeth is introduced to the handsome and upper-class Mr. Darcy (Matthew MacFadyen), sparks fly. Although there is obvious chemistry between the two, Darcy's overly reserved nature threatens the fledgling relationship.",
        "released": 2005,
        "image": "https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg",
        "reviews": [
         {
            "stars": 5,
            "comment": "Quite amazing!"
          }
        ]
      },

      {
        "id": 2,
        "key": 2,
        "title": "The Proposal",
        "ratingImage": PGThirteen,
        "imdbRating": Fourhalfstars,
        "description": "Faced with deportation to her native Canada, high-powered book editor Margaret Tate (Sandra Bullock) says she's engaged to marry Andrew Paxton (Ryan Reynolds), her hapless assistant. Andrew agrees to the charade, but imposes a few conditions of his own, including flying to Alaska to meet his eccentric family. With a suspicious immigration official always lurking nearby, Margaret and Andrew must stick to their wedding plan despite numerous mishaps.",
        "released": 2009,
        "image": 'https://i.pinimg.com/564x/49/45/d1/4945d1ceabd8f5f3eb1d32997854a674.jpg',
        "reviews": [
         {
            "stars": 2,
            "comment": "So refreshing :D"
          }
        ]
      },

      {
        "id": 3,
        "key": 3,
        "title": "To All the Boys Ive Loved Before",
        "ratingImage": TVFourteen,
        "imdbRating": Fourstars,
        "description": "A teenage girl's love letters are exposed and wreak havoc on her life.",
        "released": 2018,
        "image": "https://www.slj.com/binaries/content/gallery/Jlibrary/2018/to-all-the-boys-netflix-cv.jpg",
        "reviews": [
         {
            "stars": 4,
            "comment": "I loved it!"
          }
        ]
      }
]