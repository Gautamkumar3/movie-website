


 async function trendingMovies(){
    const url="https://api.themoviedb.org/3/trending/all/day?api_key=4b50bf9efa7a211231e97dac64a3982d"

    let res=await fetch(url)
    
    let All=await res.json();

    append(All.results)


 }

 trendingMovies()

 function append(data){
     
    data.forEach(function(el){
         let div=document.createElement("div");

         
         let Image=document.createElement("img");
          Image.src=`https://image.tmdb.org/t/p/w200${el.poster_path}`

          let Title=document.createElement("h3");
          Title.innerText=el.title;

          let Lang=document.createElement("p");
          Lang.innerText="Lang:-"+el.original_language;

          let Overview=document.createElement("p");
          Overview.innerText=el.overview


          div.append(Image,Title,Lang,Overview)
          document.getElementById("movies").append(div)


    })
 }