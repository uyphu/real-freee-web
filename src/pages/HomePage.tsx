import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ItemCard from '../components/ItemCard';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const sampleItems = [
  {
    title: 'Chair',
    description: 'Lightly used office chair',
    image: 'https://source.unsplash.com/400x300/?chair',
    location: 'Los Angeles',
  },
  {
    title: 'Books',
    description: 'Assorted novels and textbooks',
    image: 'https://source.unsplash.com/400x300/?books',
    location: 'San Jose',
  },
  {
    title: 'Sofa',
    description: '3-seat couch in good condition',
    image: 'https://source.unsplash.com/400x300/?sofa',
    location: 'New York',
  },
];

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Items Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleItems.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div>
    </section>
    <CTA />
    <Footer />
  </>
);

export default HomePage;
