import s from './AddTodo.module.css'

export default function AddTodo({value,setValue,onAdd}){
  return(
    <div className={s.addContainer}>
      <form  onSubmit={(e)=>{
        e.preventDefault();
        onAdd(value);
        setValue('');
      }} >       
        <input className={s.addContainerInput} type="text"  value={value} onChange={(e)=>{                
          setValue(e.target.value);      
        }}/>
        <button className={s.addContainerButton}>Add</button>
      </form>
    </div>
  );
}