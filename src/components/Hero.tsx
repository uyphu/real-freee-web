const Hero = () => (
    <section className="bg-green-100 text-center py-20">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Give and Receive for Free</h1>
      <p className="text-gray-600 text-lg mb-6">Reuse. Reduce Waste. Help the Community.</p>
      <div className="space-x-4">
        <a href="/post" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Start Giving</a>
        <a href="/browse" className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded hover:bg-green-50">Browse Items</a>
      </div>
    </section>
  );
  
  export default Hero;
  