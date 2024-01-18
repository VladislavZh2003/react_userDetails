import { useParams } from 'react-router-dom';
import S from "./UserDetails.module.css";


const UserDetails = () => {
  const params = useParams();

  console.log(params); 

  return (
    <>
    <div className={S.container}>
      <p>User company: </p>
      <p>{params.user}</p>
    </div>

    </>
  )
}

export default UserDetails