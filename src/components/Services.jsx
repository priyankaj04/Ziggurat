import React from 'react';
import '../App.css';
import talent from '../imgs/talent.avif';
import product from '../imgs/product.avif';
import media from '../imgs/coding.avif';
import video from '../imgs/video.avif';
import accounting from '../imgs/accounting.avif';
import staffing from '../imgs/staffing.avif';

function Services() {
  return (
    <div style={{ marginTop: 70, width: '100%'}}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Our Services</h1>
          <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>We offer a diverse toolbox of expertise,
            and are always looking to help a creator do something new and fail fast in all the right ways.</p>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ borderRight: '2px solid white' }}>
          <h2 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Talent Representation</h2>
          <img src={talent} width="350px" height="150px" />
          <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>At our core, we offer talent management. An expert who knows there’s more
            to learn; a cheerleader who shouts louder than your mum; a negotiator who values you as much as you do. At a minimum this means brand deals,
            but to us it means being on the team as a trusted partner.</p>
        </div>
        <div style={{ borderRight: '2px solid white' }}>
          <h2 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Product Development</h2>
          <img src={product} width="350px" height="150px" />
          <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>The future is unique product, not a tee with your face on. A good product solves a problem,
            provides beauty and inspiration, or curates experience and expertise. Our in-house team can set up individual manufacturing and distribution methods to suit.
            Wouldn’t you rather promote yourself, and not someone else?</p>
        </div>
        <div style={{ borderRight: '2px solid white' }}>
          <h2 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Media Management</h2>
          <img src={media} width="350px" height="150px" />
          <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>Whether it’s using existing content or supporting an upload schedule,
            our objective is to build a team to fit a creator’s style and tone while optimising the content for everywhere else. The priority is
            growing an authentic audience across platforms. You’ve made a nice video, why would you just upload it to YouTube?</p>
        </div>
        <div style={{ borderRight: '2px solid white' }}>
          <h2 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Video Production</h2>
          <img src={video} width="350px" height="150px" />
          <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>From producing TV shows to delivering large projects for
            individual brands, sometimes you need a few extra pairs of hands. We help take the risk out of scaling up a production
            whatever the location, from budgeting and finding crew, to managing production and delivery. We believe no idea is too
            big to tackle.</p>
        </div>
        <div style={{ borderRight: '2px solid white' }}>
          <h2 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Accounting & Bookkeeping</h2>
          <img src={accounting} width="350px" height="150px" />
          <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>No one has caused bigger problems for our
            clients than their accountants. If your accountant says, “YouTube? How’s that work then?” maybe you need a
            new accountant. If you’re making more money than you know what to do with, you also need help. Bear in mind,
            our attitude towards tax is not about paying less, but worrying less.</p>
        </div>
        <div style={{ borderRight: '2px solid white' }}>
          <h2 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Staffing & Recruitment</h2>
          <img src={staffing} width="350px" height="150px" />
          <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>We approach recruitment by understanding the
            skills and expertise you need, providing a professional process that attracts and identifies top candidates,
            and supporting the selection process to ease the burden. Tweeting that you need an editor only gets you so far.</p>
        </div>
      </div>
    </div>
  )
}

export default Services;