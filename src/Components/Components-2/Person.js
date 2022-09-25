
// import { useState } from "react";
import { useReducer } from "react";
import { BsFillPersonFill, BsInboxes } from "react-icons/bs";
import { ImOffice, ImCreditCard, ImLock, ImGift, ImQuestion } from "react-icons/im";
import photos from '../../assets/photo/person.png'




const initialValue={
    name : 'მარიამ',
    surname : 'ჭუბაბრია',
    address :'მისამართი',
    phonenumber : '12134671314',
    mail : 'Gmail.com',
    date : '14',
    month: 'თვე',
    year : '1991'


}

function changeValue(state, action){
    switch(action.type){
        case "name" :
            return{ ...state, ...{ name : action.value}}
        case "surname" :
            return{ ...state, ...{ surname : action.value}}
            
         case "address" :
                return{ ...state, ...{ address : action.value}}
         case "phonenumber" :
                return{ ...state, ...{ phonenumber : action.value}}
        case "mail" :
                 return{ ...state, ...{ mail : action.value}}
        case "date" :
                return{ ...state, ...{ date : action.value}}
        case "month" :
               return{ ...state, ...{ month : action.value}}
        case "year" :
               return{ ...state, ...{ year : action.value}}
                                
                

    default :
      throw new Error()
    }
}

export default function Person() {
    
  
    const listtodo = [
        { id: 1, text: 'მედიკამენტები' },
        { id: 1, text: 'საკვები' },
        { id: 1, text: 'კოსმეტიკა' }
        
    ]

    const listtodo_2=[
        { id :1, text: 'ჰიგიენური'},
        { id :1, text: 'სამედიცინო მოწყობილობები'},
        { id :1, text: 'დედა შვილი'}
    ]

    function handleSubmited(e){
    e.preventDefault();
    alert(`${state.name} კეთილი იყოს შენი მობრძანება`)
    }
    const [state, dispatch] = useReducer(changeValue, initialValue)



    return (
        <div className="s-7">
            <div className="person-details">
                <p> გამარჯობა, ნათია</p>

                <div className="details">
                    <div className="details_one">
                        <ul className="details-ul">



                            <li className="details_li"> <button className="btn_details_1"><BsFillPersonFill className="icon-details" />ჩემი დეტალები</button></li>
                            <li> <button className="btn_details_2"><BsInboxes className="icon-details" />ჩემი შეკვეთები</button></li>
                            <li><button className="btn_details_2"> <ImOffice className="icon-details" />მისამართები</button></li>
                            <li> <button className="btn_details_2"><ImCreditCard className="icon-details" />გადახდის მეთოდი</button></li>
                            <li> <button className="btn_details_2"><ImLock className="icon-details" />ჩემი პაროლი</button></li>
                            <li> <button className="btn_details_2"><ImGift className="icon-details" />ზღარბი ბარათი</button></li>
                            <li> <button className="btn_details_2"><ImQuestion className="icon-details" />დახმარება</button></li>

                        </ul>
                    </div>
                    <div className="details_two">


                        <div className="details_all">


                            <form action="" className="info" onSubmit={handleSubmited}>

                                <div className="forms" >
                                    <p className="forms_style"> მარიამი</p>
                                    <input className="form" type="text" id="name" 
                                     value={state.name}
                                     onChange={(e)=>{
                                        dispatch({
                                            type:"name",
                                            value: e.target.value
                                        })
                                     }}
                                     placeholder="მარიამი" />
                                </div>

                                <div class="forms" >
                                    <p className="forms_style">გვარი</p>
                                    <input className="form" type="text" id="name" 
                                    value={state.surname}
                                    onChange={(e)=>{
                                        dispatch({
                                            type:"surname",
                                            value: e.target.value
                                        })
                                     }}
                                     placeholder="ჭუბაბრია" />
                                </div>

                                <div class="forms" >
                                    <p className="forms_style">მისამართი</p>
                                    <input className="form_m" type="text" id="address" name="address" 
                                    value={state.address}
                                    onChange={(e)=>{
                                        dispatch({
                                            type:"address",
                                            value: e.target.value
                                        })
                                     }}
                                    placeholder="მისამართი" />
                                </div>

                                <div class="forms" >
                                    <p className="forms_style"> ტელეფონი</p>
                                    <input className="form" type="number" id="phone" name="phone" 
                                    value={state.phonenumber}
                                    onChange={(e)=>{
                                        dispatch({
                                            type:"phonenumber",
                                            value: e.target.value
                                        })
                                     }}
                                     placeholder="123123123131314141" />
                                </div>

                                <div class="forms">
                                    <p className="forms_style">ელ-ფოსტა</p>
                                    <input className="form" type="email" id="email" name="email" 
                                    value={state.mail}
                                    onChange={(e)=>{
                                        dispatch({
                                            type:"mail",
                                            value: e.target.value
                                        })
                                     }}
                                     placeholder="Gmail.com" />
                                </div>

                                <div class="forms">
                                    <p className="forms_style">დაბადების დღე</p>

                                    <div className="Dates">
                                        <div className="number_date" >
                                            <select name="day" className="number-date"
                                             value={state.date}
                                             onChange={(e)=>{
                                                dispatch({
                                                    type:"date",
                                                    value: e.target.value
                                                })
                                             }} >
                                                <option value="01">1</option>
                                                <option value="02">2</option>
                                                <option value="03">3</option>
                                                <option value="04">4</option>
                                                <option value="05">5</option>
                                                <option value="06">6</option>
                                                <option value="07">7</option>
                                                <option value="08">8</option>
                                                <option value="09">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                        </div>



                                        <div className="month_date">
                                            <select name="month" className="month-date" 
                                            value={state.month} 
                                            onChange={(e)=>{
                                                dispatch({
                                                    type:"month",
                                                    value: e.target.value
                                                })
                                             }}>
                                                <option>თვე</option>
                                                <option value="01">იანვარი</option>
                                                <option value="02">თებერვალი</option>
                                                <option value="03">მარტი</option>
                                                <option value="04">აპრილი</option>
                                                <option value="05">მაისი</option>
                                                <option value="06">ივნისი</option>
                                                <option value="07">ივლისი</option>
                                                <option value="08">აგვისტო</option>
                                                <option value="09">სექტემბერი</option>
                                                <option value="10">ოქტომბერი</option>
                                                <option value="11">ნოემბერი</option>
                                                <option value="12">დეკემბერი</option>
                                            </select>
                                        </div>


                                        <select name="year" className="year"
                                         value={state.year} 
                                         onChange={(e)=>{
                                            dispatch({
                                                type:"year",
                                                value: e.target.value
                                            })
                                         }}>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                        </select>
                                    </div>


                                </div>


                            {/* </form> */}

                            <div className="image_details">

                                <img src={photos} alt="" className="image_person" />
                                

                                <div className="ul_list_menu">
                                   <ul className="u_list">
                                    <p className="list_p">დაინტერესებული</p>
                                    {
                                        listtodo.map((item, index)=>{
                                            return(
                                                <li key={index} className='li_todo' >
                                                <input type='checkbox' className="checkbox"/>
                                                <span>{item.text}</span>
                                                </li>
                                            )
                                        })
                                    }
                                   </ul>

                                   <ul className="u_list-2">
                                   
                                    {
                                        listtodo_2.map((item, index)=>{
                                            return(
                                                <li key={index} className='li_todo_2' >
                                                <input type='checkbox' className="checkbox2"/>
                                                <span>{item.text}</span>
                                                </li>
                                            )
                                        })
                                    }
                                   </ul>
                                
                                </div>

                              <button className="save" > დამახსოვრება</button>



                            </div>

                            </form>

                        </div>




                    </div>

                </div>
            </div>
        </div>

         
    )
}