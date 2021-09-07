import Link from 'next/link';

const Home = () =>{

  return(
    <div>
      <Link href="/Login"><a>로그인페이지에요</a></Link>
      <Link href="/TodoList">투두리스트에요</Link>
    </div>
  )
}

export default Home;

