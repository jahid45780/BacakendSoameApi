const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const posts = [
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a1",
        "title": "Exploring the Mountains",
        "description": "My journey through the Rocky Mountains was amazing!",        "userName": "JohnDoe"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a2",
        "title": "Delicious Pasta Recipe",
        "description": "Today, I tried a new pasta recipe, and it turned out great!",        "userName": "JaneSmith"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a3",
        "title": "Mastering JavaScript Tips",
        "description": "Sharing some key tips and tricks for mastering JavaScript.",        "userName": "CodeMaster"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a4",
        "title": "Grand Canyon Adventure",
        "description": "Pictures from my recent hike in the Grand Canyon.",
      "userName": "NatureLover"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a5",
        "title": "Top 10 Books to Read This Year",
        "description": "A list of my favorite books this year!",
        "userName": "BookWorm"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a6",
        "title": "Achieving Fitness Goals",
        "description": "Finally hit my target weight this month! Feeling proud.",
        "userName": "FitnessFanatic"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a7",
        "title": "Dreaming of Japan",
        "description": "Next on my travel list: Japan!",
        "userName": "TravelAddict"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a8",
        "title": "React Learning Journey",
        "description": "Started learning React. It’s challenging but rewarding!",
        "userName": "FrontEndDev"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a9",
        "title": "Low Light Photography Tips",
        "description": "Sharing some of my best tips for shooting in low light.",
        "userName": "PhotoGuru"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9b0",
        "title": "Seasonal Gardening Success",
        "description": "My flowers are blooming beautifully this season!",
         "userName": "GreenThumb"
    }
]

// Get all posts
app.get("/posts", async (req, res) => {
  try {
    res.status(200).json({
      message: "Data successfully",
      success: true,
      data: posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed posts data",
      success: false,
      error: error.message,
    });
  }
});

// Get single Data
app.get("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const post = await posts.find((data) => data._id === postId);
    res.status(200).json({
      message: "Single Data successfully",
      success: true,
      data: post,
    });

});

//  Add a new post
app.post("/posts", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: "Post api successfully",
        success: true,
        data: {},
      });

});

//  updated method here 
app.put("/posts/:id", (req, res) => {

    const postId = req.params.id;
    const { title, description, userName } = req.body;

    const updateUser = posts.find((data) => data._id === postId);
  
    if (updateUser) {
     
      updateUser.title = title;
      updateUser.description = description;
      updateUser.userName = userName;
  
    
      res.status(200).json({
        message: "updated successfully",
        success: true,
        data: updateUser,
      });
    } else {
     
      res.status(404).json({
        message: "Post not found",
        success: false,
      });
    }
  });


  // delete api

  app.delete("/posts/:id", (req, res) => {
    const postId = req.params.id;

   
    const postIndex = posts.findIndex((data) => data._id === postId);
  
    if (postIndex !== -1) {
        const deletedPost = posts.splice(postIndex, 1);
      
        res.status(200).json({
            message: " deleted successfully",
            success: true,
            data: deletedPost,
        });
    } else {
        res.status(404).json({
            message: "data not found",
            success: false,
        });
    }
});





// Start the server
app.listen(port, () => {
  console.log(`My Server is Siting ${port}`);
});
