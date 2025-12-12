export default function About() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#1b2838', color: '#d1d3d3dc', fontFamily: 'Comic Sans MS' }}>
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-6" style={{ color: '#66c0f4' }}>
                    About Game Engine
                </h1>
                
                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#29edb6ff' }}>
                            Who We Are
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Game Engine is your premier destination for discovering and enjoying the best games across all platforms. 
                            We're passionate gamers dedicated to bringing you the latest titles, exclusive deals, and a vibrant gaming community.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#29edb6ff' }}>
                            Our Mission
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Our mission is to make gaming accessible and enjoyable for everyone. We strive to provide a seamless 
                            platform where gamers can explore, purchase, and play their favorite titles while connecting with 
                            fellow gaming enthusiasts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#29edb6ff' }}>
                            What We Offer
                        </h2>
                        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                            <li>Extensive library of games across all genres</li>
                            <li>Regular sales and exclusive discounts</li>
                            <li>Community features and social gaming</li>
                            <li>Secure payment and download system</li>
                            <li>24/7 customer support</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
