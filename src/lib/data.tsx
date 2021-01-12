import { CustomerReview, Services, InfoSectionProps } from '../types'

const homeSection: InfoSectionProps = {
  logo: '',
  header: 'WHERE YOUR PET BECOMES OUR BUDDY',
  subheader: 'PetBuddy',
  content: [
    'Pet Sitting l Pet Walking | Pet Grooming',
    'We are PetBuddy and we specalise in looking after your pets, from walking your pooches, looking after your pet whilst you are away, to offering a specialist grooming service to your cats, our aim is to give you peace of mind that your pet is in great hands with us.'
  ],
  cta: true,
  ctaText: 'Contact Us'
}

const aboutUsSection: InfoSectionProps = {
  logo: '',
  header: 'Your pet, our buddy',
  subheader: 'Complete Pet Services',
  content: [
    `PetBuddy is a fully insured business offering professional care for your pet, from single visits and walks to longer bookings, we can work with you to ensure your pet gets the best care when you need it the most.We are unique in that we understand the components of trust and we have built ourselves around that. It’s a lot to let someone in to your home and to put your pet in their hands so we work to build a lovely relationship with you and your pet.`,
    'From dog walking to sitting, small animal care, to cat sitting and grooming, we are the people you can trust to give your pet love and attention, giving you peace of mind.',
    'We have a range of experienced animal lovers ready to make your pet their buddy, from single walks or visits to longer term arrangements, nothing is too small or too big for us to take on.'
  ]
}

const reviews: CustomerReview[] = [
  {
    id: 1,
    comment: '“PetBuddy are always available, even at short notice and Christmas. They take really great care of Lulu, giving lots of love and attention. Really pleased to have PetBuddy around”',
    user: '- Maila, London'
  },
  {
    id: 2,
    comment: '“We always return from holiday to find Boss as happy as when we look after him ourselves, PetBuddy only have the best sitters and we trust them 100%”',
    user: '- Margarita, London'
  },
  {
    id: 3,
    comment: '“George loves his walks with PetBuddy, they really treat him like he is their own, he comes back happy and having had the best playtime”',
    user: '- Annabelle, Nottingham'
  }
]

const services: Services[] = [
  {
    image: '',
    header: 'Cat Services',
    description: 'We offer a cat sitting and fully qualified grooming service, let us have your cat looking and feeling amazing.',
    cta: true,
    ctaText: 'Learn More'
  },
  {
    image: '',
    header: 'Dog Services',
    description: 'Trust us with dog walking, sitting, behaviour and communication. Your pooch is guaranteed to be in safe hands with us.',
    cta: true,
    ctaText: 'Learn More'
  },
  {
    image: '',
    header: 'Small Pet Services',
    description: 'PetBuddy will care for your pet, however small. Birds, fish, ferrets, whatever your pet is, you can count on us.',
    cta: true,
    ctaText: 'Learn More'
  }
]

export { reviews, services, homeSection, aboutUsSection }
export default InfoSectionProps;
