import { useNavigate } from "react-router-dom";

const NewsPage = () => {
    const navigate = useNavigate()

    const handleBackHome = ()=> {
        return navigate('/')
    }
  return (
    <>  
        <h1>NewsPage</h1>
        <button onClick={handleBackHome}>Về trang chủ</button>
    </>
  )
};

export default NewsPage;
