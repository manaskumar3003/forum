export default function Comment(){
    return(

       
<div class="w-full bg-white rounded-lg border p-2 my-4 mx-6">

<h3 class="font-bold">Discussion</h3>

<form>

    <div class="flex flex-col">

        <div class="border rounded-md p-3 ml-3 my-3">
            <div class="flex gap-3 items-center">

                <img src="https://blankhearts.com/wp-content/uploads/2022/10/girl-whatsapp-dp-7.jpg"
                    class="object-cover w-8 h-8 rounded-full 
                    border-2 border-emerald-400  shadow-emerald-400
                    " />

                <h3 class="font-bold">
                    fatboy
                </h3>
            </div>


            <p class="text-gray-600 mt-2">
                random comment is real
            </p>

        </div>

        <div class="border rounded-md p-3 ml-3 my-3">
            <div class="flex gap-3 items-center">

                <img src="https://cdn.statusqueen.com/dpimages/thumbnail/Boy_Stylish__Dp_Image-2277.jpg"
                    class="object-cover w-8 h-8 rounded-full 
                    border-2 border-emerald-400  shadow-emerald-400
                    " />

                <h3 class="font-bold">
                    technezzz
                </h3>
            </div>


            <p class="text-gray-600 mt-2">
                gdsc is the best 
            </p>

        </div>





    </div>



    <div class="w-full px-3 my-2">
        <textarea
            class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body" placeholder='Type Your Comment' required></textarea>
    </div>

    <div class="w-full flex justify-end px-3">
        <input type='submit' class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value='Post Comment' />
    </div>
</form>


</div>

       



    )
}