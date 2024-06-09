/* card1 parsing */


    
    var jsonData = {
        "asset_id": 18883,
        "asset_title": "Technical Project Management",
        "asset_description": "Story of Alignment\rScope of Agility\rSpecific Accountable \rStaggering Approach\r\n\r\n",
        "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
        "asset_type": "display_asset",
        "asset_content_type": "video"
    };

    
    document.getElementById('title').innerHTML = jsonData.asset_title;
    document.getElementById('description').innerHTML = "<strong>Description:</strong> " + jsonData.asset_description.replace(/\r\n/g, "<br>");

    
    var videoEmbed = document.getElementById('videoEmbed');
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', jsonData.asset_content);
    iframe.setAttribute('width', '480');
    iframe.setAttribute('height', '291');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    videoEmbed.appendChild(iframe);

    /* card2 parsing */




 var jsonData2 = {
    "asset_id": 18884,
    "asset_title": "Threadbuild",
    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
    "asset_content": "",
    "asset_type": "input_asset",
    "asset_content_type": "threadbuilder"
};


document.getElementById('title2').innerHTML = jsonData2.asset_title;
document.getElementById('description2').innerHTML = "<strong>Description:</strong> " + jsonData2.asset_description;



 /* card3 parsing  */


  
    var jsonData3 = {
        "asset_id": 18885,
        "asset_title": "Structure Your Pointers",
        "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
        "asset_content": "",
        "asset_type": "input_asset",
        "asset_content_type": "article"
    };

    
    document.getElementById('title3').innerHTML = jsonData3.asset_title;
    document.getElementById('description3').innerHTML = "<strong>Description:</strong> " + jsonData3.asset_description;

   


    /* card4 parsing */

       
        var jsonData4 = {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more, read more",
            "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
        };
    
        
        document.getElementById('title4').innerHTML = jsonData4.asset_title;
        document.getElementById('description4').innerHTML = "<strong>Description:</strong> " + jsonData4.asset_description;
    
        