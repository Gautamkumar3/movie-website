

let suggest=document.getElementById("suggestion")

let id;

async function searchByName(query){

   try{
        const url= `https://api.themoviedb.org/3/search/movie?api_key=4b50bf9efa7a211231e97dac64a3982d&query=${query}`
        
        let res=await fetch(url)

        let Data= await res.json()

        return Data.results
   }
    catch(err){
          console.log(err)
         let contain = document.getElementById("container")
         
         let Image=document.createElement("img")
         Image.src="https://media0.giphy.com/media/TqiwHbFBaZ4ti/200w.webp?cid=ecf05e47j29dqdt4l6pglhgt1xb5sd8pw5idwqn6zkv25f75&rid=200w.webp&ct=g"

         contain.append(Image)
       }

 }

 function  showSuggestion(movies){
     suggest.innerHTML=""

       if(movies===undefined){
         return false;
       }
       
     movies.forEach(function(el){

         let div1=document.createElement("div");

         let h3= document.createElement("h3");
         h3.innerText=el.original_title;

         let p=document.createElement("p");
         p.innerText=el.release_date;

         let div2=document.createElement("div");
 

         let image=document.createElement("img");
          image.src=`https://image.tmdb.org/t/p/w200${el.poster_path}`


       div1.append(h3,p);
       div2.append(image);
       suggest.append(div2,div1)


     })
         
 }

 async function main(){

  let query=document.querySelector("#name").value;

    let res= searchByName(query);

    let Data1=await res

    showSuggestion(Data1)

 }


 function debounceFunc(func,delay){

     if(id){
        clearTimeout(id)
    }

     id=setTimeout(function(){
            func()
     },delay)
 }

 // show data

 async function showData(){
    let Name=document.getElementById("name").value;

     document.getElementById("abc").innerHTML=""


  const url= `http://www.omdbapi.com/?t=${Name}&apikey=aa6a6cdc`

  try{

     let res=await fetch(url);

      let data=await res.json();
      append(data)
    

    }catch(err){
      console.log(err)
      let contain = document.getElementById("container")
         
         let Image=document.createElement("img")
         Image.src="https://media0.giphy.com/media/TqiwHbFBaZ4ti/200w.webp?cid=ecf05e47j29dqdt4l6pglhgt1xb5sd8pw5idwqn6zkv25f75&rid=200w.webp&ct=g"

         contain.append(Image)
  }

  
  
  function append(data){
  
  document.getElementById("container").innerHTML="";
       
      let box=document.createElement("div");
       
      let img_box=document.createElement("div");
       let Poster=document.createElement("img");
       Poster.src= data.Poster;
       img_box.append(Poster)

       let R_Date=document.createElement("p");
       R_Date.innerText="Year- "+ data.Year

       let Title=document.createElement("p");
       Title.innerText="Title- "+ data.Title;

       let IMDB=document.createElement("p");
       IMDB.innerText="IMDB id- "+ data.imdbID

       let Type=document.createElement("p")
       Type.innerText="Type- "+ data.Type;

       let Rating=document.createElement("p")
       Rating.innerText="Rating- "+ data.Ratings[0].Value;

       let Runtime=document.createElement("p")
       Runtime.innerText="Type- "+ data.Runtime;

       let Plot=document.createElement("p")
       Plot.innerText="Plot- "+ data.Plot;
     

       box.append(Title,Runtime,R_Date,IMDB,Type,Rating,Plot)

       document.getElementById("container").append(img_box,box)

     if(Number(data.imdbRating)>8.5){
         let h3=document.createElement("h3")
         h3.innerText="Recommended"
         box.append(h3)
        
     }
}
}