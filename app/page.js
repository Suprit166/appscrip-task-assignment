// import Head from 'next/head';
// import styles from '../styles/Home.module.css';

// async function fetchProducts() {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const products = await res.json();
//   return products;
// }

// export default async function Home() {
//   const products = await fetchProducts();

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Discover Our Products</title>
//         <meta name="description" content="Shop the latest arrivals in our collection of bags and accessories." />
//       </Head>
//       <header className={styles.header}>
//         <nav>
//           <ul>
//             <li>LOGO</li>
//             <li>SHOP</li>
//             <li>SELL</li>
//             <li>ABOUT</li>
//             <li>CONTACT US</li>
//           </ul>
//         </nav>
//       </header>
//       <main className={styles.main}>
//         <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna id libero finibus, in maximus magna.</p>
//         <section className={styles.filters}>
//           {/* Filter options */}
//         </section>
//         <section className={styles.products}>
//           {products.map(product => (
//             <div key={product.id} className={styles.card}>
//               <img src={product.image} alt={product.title} />
//               <h3>{product.title}</h3>
//               <p>{product.price}</p>
//             </div>
//           ))}
//         </section>
//       </main>
//       <footer className={styles.footer}>
//         <section className={styles.newsletter}>
//           <h2 className={styles.subheading}>BE IN THE KNOW</h2>
//           {/* Newsletter signup form */}
//         </section>
//         <section className={styles.contact}>
//           <h2 className={styles.subheading}>CONTACT US</h2>
//           {/* Contact details */}
//         </section>
//         <section className={styles.follow}>
//           <h2 className={styles.subheading}>FOLLOW US</h2>
//           {/* Social media links */}
//         </section>
//       </footer>
//     </div>
//   );
// }


import Head from 'next/head';
import styles from '../styles/Home.module.css';

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Shop the latest arrivals in our collection of bags and accessories." />
      </Head>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>LOGO</li>
            <li>SHOP</li>
            <li>SELL</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna id libero finibus, in maximus magna.</p>
        <section className={styles.filters}>
          {/* Filter options */}
        </section>
        <section className={styles.products}>
          {products.map(product => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className={styles.footer}>
        <section className={styles.newsletter}>
          <h2 className={styles.subheading}>BE IN THE KNOW</h2>
          {/* Newsletter signup form */}
        </section>
        <section className={styles.contact}>
          <h2 className={styles.subheading}>CONTACT US</h2>
          {/* Contact details */}
        </section>
        <section className={styles.follow}>
          <h2 className={styles.subheading}>FOLLOW US</h2>
          {/* Social media links */}
        </section>
      </footer>
    </div>
  );
}
