export default function Support() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#1b2838', color: '#d1d3d3dc', fontFamily: 'Comic Sans MS' }}>
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-6" style={{ color: '#66c0f4' }}>
                    Support Center
                </h1>
                
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#29edb6ff' }}>
                            Frequently Asked Questions
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="bg-opacity-20 p-4 rounded" style={{ backgroundColor: '#253047ff' }}>
                                <h3 className="font-semibold text-lg mb-2" style={{ color: '#66c0f4' }}>
                                    How do I purchase a game?
                                </h3>
                                <p>
                                    Browse our catalog, add games to your cart, and proceed to checkout. We accept all major payment methods 
                                    including credit cards, PayPal, and digital wallets.
                                </p>
                            </div>

                            <div className="bg-opacity-20 p-4 rounded" style={{ backgroundColor: '#253047ff' }}>
                                <h3 className="font-semibold text-lg mb-2" style={{ color: '#66c0f4' }}>
                                    How do I download my games?
                                </h3>
                                <p>
                                    After purchase, go to your library and click the download button next to your game. 
                                    Our installer will guide you through the setup process.
                                </p>
                            </div>

                            <div className="bg-opacity-20 p-4 rounded" style={{ backgroundColor: '#253047ff' }}>
                                <h3 className="font-semibold text-lg mb-2" style={{ color: '#66c0f4' }}>
                                    What is your refund policy?
                                </h3>
                                <p>
                                    You can request a refund within 14 days of purchase if you've played less than 2 hours. 
                                    Visit your purchase history and select "Request Refund".
                                </p>
                            </div>

                            <div className="bg-opacity-20 p-4 rounded" style={{ backgroundColor: '#253047ff' }}>
                                <h3 className="font-semibold text-lg mb-2" style={{ color: '#66c0f4' }}>
                                    I'm having technical issues with a game
                                </h3>
                                <p>
                                    Check the game's community hub for common solutions, verify your game files, 
                                    or contact our support team with details about your issue.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#29edb6ff' }}>
                            Contact Us
                        </h2>
                        <div className="space-y-3">
                            <p className="text-lg">
                                <strong style={{ color: '#66c0f4' }}>Email:</strong> support@gameengine.com
                            </p>
                            <p className="text-lg">
                                <strong style={{ color: '#66c0f4' }}>Live Chat:</strong> Available 24/7 (bottom right corner)
                            </p>
                            <p className="text-lg">
                                <strong style={{ color: '#66c0f4' }}>Response Time:</strong> Usually within 24 hours
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#29edb6ff' }}>
                            Submit a Support Ticket
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2" htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    className="w-full px-4 py-2 rounded border-2"
                                    style={{ backgroundColor: '#253047ff', borderColor: '#66c0f4' }}
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    className="w-full px-4 py-2 rounded border-2"
                                    style={{ backgroundColor: '#253047ff', borderColor: '#66c0f4' }}
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    className="w-full px-4 py-2 rounded border-2"
                                    style={{ backgroundColor: '#253047ff', borderColor: '#66c0f4' }}
                                />
                            </div>
                            <div>
                                <label className="block mb-2" htmlFor="message">Message</label>
                                <textarea 
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-2 rounded border-2"
                                    style={{ backgroundColor: '#253047ff', borderColor: '#66c0f4' }}
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="px-6 py-3 rounded font-bold hover:opacity-90"
                                style={{ backgroundColor: '#66c0f4', color: '#1b2838' }}
                            >
                                Submit Ticket
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}
