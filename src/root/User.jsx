
import { useParams } from 'react-router-dom';

const User = () => {
const { id } = useParams(); // Lấy tham số "id" từ URL
  return <h1>User ID: {id}</h1>;
}
 
export default User;