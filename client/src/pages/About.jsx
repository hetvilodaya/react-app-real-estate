
export default function About() {
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">About Prop Estate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Prop Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Our mission is to help our clients achieve their Prop estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </p>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/high-angle-pie-chart-with-cities_52683-98166.jpg?t=st=1713356616~exp=1713360216~hmac=5c3ae6ea3c50c146ce0fb198eaf408fbfb42df05d01107818ff06512146346e3&w=996" alt="About Prop Estate" className="rounded-lg shadow-md" />
        </div>
      </div>
      <p className="mt-8 text-lg text-gray-700 leading-relaxed">
        Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
      </p>
    </div>
  );
}
