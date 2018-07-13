import React from 'react';
import Header from './Header';
import promotions from '../utils/promotions';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Promo = () => {
  return (
    <div className='ph3-ns'>
      <Header/>

      <section className="mw7 center baskerville">
        <h2 className="f4 f2-ns fw6 ph3 ph0-l avenir">Offerte</h2>

        {
          promotions.map(({ cover, id, name, days, price }) => (
            <article className="bt bb b--black-10" key={id}>
              <Link to={`/promo/${id}`} className="db pv4 ph3 ph0-l no-underline black dim">
                <div className="flex flex-column flex-row-ns">
                  <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img className="db" src={cover} alt={`${name} Pic`} />
                  </div>
                  <div className="w-100 w-60-ns pl3-ns tr-ns">
                    <h3 className="f5 f3-ns avenir mt0 lh-title">{name}</h3>
                    <p className="f6 lh-copy mb2">{days}</p>
                    <p className="f6 f4-l lh-copy mv4">Nuova Collezione 2018</p>
                    <p className="f6 lh-copy mv0">{price}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))
        }

      </section>

      <Footer />
    </div>
  )
}

export default Promo;