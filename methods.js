db.moviess.insertMany([
    {
    "title": "Alzheimer",
    "director": "Amr Arafa",
    "year": 2010,
    "genre": "Comedy",
    "actors": ["Adel Imam", "Mahmoud Shuaib", "Nelly Karim"],
    "about": "An old rich man named Mahmoud learns that he is suffering from Alzheimer's disease. This news makes his money-hungry sons happy to gain his fortune, but they face many obstacles in the way.",
    "ratings":5
    },
    {
    "title": "I Am Legend",
    "director": "Akiva Goldsman",
    "year": 2008,
    "genre": "Horror",
    "actors": ["Will Smith", "Alice Braga", "Dash Mihok"],
    "about": "As the Darkseekers attack the lab, the alpha male Darkseeker creates a butterfly shape while attempting to break through the glass to the laboratory. Neville realizes it is referencing the butterfly-shaped tattoo on the female Darkseeker's neck and the alpha male and his followers have simply been trying to recover his mate.",
    "ratings":9.5
    },
    {
    "title": "Finch",
    "director": "Miguel Sapochnik",
    "year": 2021,
    "genre": "Crime",
    "actors": ["Marie Wagenman", "Tom Hanks", "Caleb Landry"],
    "about": "On a post-apocalyptic Earth, a robot, built to protect the life of his creator's beloved dog learns about life, love, friendship and what it means to be human.",
    "ratings":8.5
    },
    {
    "title": "122",
    "director": "Yasir Alyasiri",
    "year": 2020,
    "genre": "Crime",
    "actors": ["Ahmed Dawood", "Ahmad Harhash", "Tarek Lotfy"],
    "about": "On a bloody night in a place where we are supposed to feel safe, a young man and his beloved are struggling not to reach the hospital, but to run away from it. They are trying to survive the night.",
    "ratings":5.5
    },
    {
        "title": "The Boat",
        "director": "Winston Azzopardi",
        "year": 2018,
        "genre": "Mystery",
        "actors": ["Joe Azzopardi", "Ernest Thesiger", "Anubis Mud"],
        "about": "Lost in a thick fog in the middle of the ocean, a lone fisherman discovers an abandoned sailboat and finds himself locked in a battle for survival.",
        "ratings":5.7
        }
]);
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
db.moviess.find();
db.moviess.insertOne({title: "testooooo"});
db.moviess.updateOne({ title: "testooooo" }, { $set: { title: "testooooo2" } });
db.moviess.deleteOne({ title: "testooooo2" });
db.moviess.find().limit(3);
db.moviess.find().skip(2);
db.moviess.find({genre:'Crime'});
db.moviess.find({genre:'Crime'},{year:2020});
db.moviess.find({genre: "Comedy" }, { title: 1, year: -1 })
db.moviess.findOne({director:"Yasir Alyasiri"});
db.moviess.countDocuments({director:"Yasir Alyasiri"})
db.moviess.find({year:{$gt:2000}})
db.moviess.find({year:{$eq:2021}})
db.moviess.find().sort({year:1, title:-1})
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

