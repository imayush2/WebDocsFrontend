import {
  gettingStarted,
  developmentTopics,
  dsaTopics,
  coreSubjects,
} from "../data/homeData.ts";

function Home() {
  return (
    
    <div className="p-8">

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Web Docs</h1>

      {/* Getting Started Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Getting started</h2>
        <p className="text-gray-600 mb-6">
          Learn how to start a new project, or explore resources to improve your
          skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gettingStarted.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md bg-gradient-to-r ${item.colors} transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold mb-3">Development</h2>
        <p className="text-gray-600 mb-6">
          Explore powerful concepts like Redux, System Design, Core CS, and
          more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {developmentTopics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <div className="p-6 rounded-xl shadow-md bg-gradient-to-r from-pink-100 to-blue-200 transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-2">
                    {Icon && <Icon className={`text-3xl ${item.iconColor}`} />}
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <br />
      <br />
      <br />

      <section>
        <h2 className="text-2xl font-bold mb-3">DSA</h2>
        <p className="text-gray-600 mb-6">
          Explore powerful concepts like Redux, System Design, Core CS, and
          more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dsaTopics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <div className="p-6 rounded-xl shadow-md bg-gradient-to-r from-pink-100 to-blue-200 transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-2">
                    {Icon && <Icon className={`text-3xl ${item.iconColor}`} />}
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <br />
      <br />
      <br />

      <section>
        <h2 className="text-2xl font-bold mb-3">Core subjects</h2>
        <p className="text-gray-600 mb-6">
          Explore powerful concepts like Redux, System Design, Core CS, and
          more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coreSubjects.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <div className="p-6 rounded-xl shadow-md bg-gradient-to-r from-pink-100 to-blue-200 transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-2">
                    {Icon && <Icon className={`text-3xl ${item.iconColor}`} />}
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
