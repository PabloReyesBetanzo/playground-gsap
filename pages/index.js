import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to GSAP playground</h1>
      <nav>
        <Link href="/basic-example">
            <a>Basic Example</a>
        </Link>        
      </nav>
    </div>
  );
};

export default HomePage;
