import PostComponent from "./PostComponent";

function Home() {
  return (
    <div className="flex justify-center items-center mt-32  w-[50%] m-auto">
      <div className="flex flex-col">
          <PostComponent/>
      </div>
    </div>
  );
}

export default Home;
