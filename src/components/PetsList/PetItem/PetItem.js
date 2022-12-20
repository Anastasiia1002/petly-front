import {Img, Card, Li, Ul, ButtonDel, Icon} from './PetItem.styled'
// import dogDefault from './dogDefault.png';
import sprite from '../../../assets/images/icons.svg'
import { deleteUserPet } from 'redux/pets/petsOperations';
import { useDispatch} from 'react-redux';

const PetItem = ({pet}) => {

  const dispatch = useDispatch();

//  const deletePet = id => {
//     dispatch(deleteUserPet(id));
//   };
  // new Date(user.birthday).toISOString().split('T')[0]
    return (
      
      <Card>
        <Img src={pet.photoURL} alt="Your pet"/>
        <Ul>
          <Li>Name: <span>{pet.name}</span></Li>
          <Li>Date of birth: <span>{new Date(pet.birthday).toISOString().split('T')[0]}</span></Li>
          <Li>Breed: <span>{pet.breed}</span></Li>
          <Li>Comments: <span>{pet.comments}</span></Li>
          <ButtonDel onClick={()=> {dispatch(deleteUserPet(pet._id))}}>
          <Icon><use href={`${sprite}#delete`} >
            </use></Icon>
        </ButtonDel>
        </Ul>
       
      </Card>
     
    );
  };
  
  export default PetItem;
  