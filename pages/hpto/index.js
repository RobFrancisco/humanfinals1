import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            <Link href="https://thegameawards.com/nominees" passHref legacyBehavior>
                <a
                    className="home_page_takeover_sizer ds_no_flags app_impression_tracked"
                    data-ds-appid="1776870"
                    role="button"
                    aria-label="PLAYSTATION PUBLISHER SALE"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', width: '95vw', maxWidth: 1400 }}
                >
                    <img
                        alt="homepagetakeover"
                        src="/assets/goty.jpg"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </a>
            </Link>
        </div>
    )
}

export default Index