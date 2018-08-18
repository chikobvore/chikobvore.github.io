var mashapeApiKey = 'YOUR_MASHAPE_API_KEY';
 var wx = ChatBot.Engines.webknox(mashapeApiKey);

 var sampleConversation = [
     "Hey",
     "i am good", 
     "nice to meet you",
      "My name is enstein",
      "Bye"
 ];
 var config = {
     botName: 'nyasha',
     inputs: '#humanInput',
     inputCapabilityListing: true,
     engines: [ChatBot.Engines.duckduckgo()],
     addChatEntryCallback: function(entryDiv, text, origin) {
         entryDiv.delay(200).slideDown();
     }
 };
 
     var greetings = [
     "hey how are you?",
     "hie are you good?;",
     "i am  excellent  and you how are doing?",
     "good good and you?",
     "hey wasup?"
 ];
 
      var responses = [
     "hi $1, nice to meet you; so what do you do in life, i am a software engineer",
     "oh $1 you have nice name, so where do you stay",
     "thanks $1 for the visit,  welcome to Mr Chikobvore's personal blog.This blog contains projects all done by Mr Chikobvore, contact information and gallery photos. For quick navigation you can just type what you want to navigate, for example projects.",
     "thanks $1 for visiting the blog,so where do you stay",
     "nice to meet you $1, so are you here to chat with me or you  want to see nyasha's portfolio"
 ];
 
 var stays = [
     "kkkkk sorry i don't talk to people who live in $1, what do you want",
     "i know $1 very well,so are you here to chat with me or you looking for nyasha? ",
     "ow you stay in a nice place, don't you want to stay with me also kkkk",
     "i hate people from $1 kkkk,so are you here to chat with me or you looking for nyasha ",
     "uhmm i usually don't trust people who live in $1 they are thugs"
 ];
 
  var nyasha = [
     "nyasha is busy at the moment, you can live your message and i will pass it to him",
     "nyasha is writing some pieces of code at the moment and he d n",
     "He just left me  here and i don't know he's where abouts, try calling him",
     "he is busy updating my IQ, he  wants me to be intelligent more that humans",
     "again ,what do you want Nyasha for, cant you play by your self?"
 ];
 var various = [
     "ow thats good, i ",
     "nyasha is writing some pieces of code at the moment and he d n",
     "He just left me  here and i don't know he's where abouts, try calling him",
     "he is busy updating my IQ, he  wants me to be intelligent more that humans",
     "again ,what do you want Nyasha for, cant you play by your self?"
 ];
 

 
 var i = Math.round(Math.random()*5);
 ChatBot.init(config);
 //adding a $ makes the bot not to consider what comes after the keyword
 ChatBot.setBotName("Nyasha");
 ChatBot.addPattern("^hie|hello|hey|hi", "response",greetings[i], undefined, "Say 'Hie' to be greeted back.");

 ChatBot.addPattern("^Nyasha", "response", "yes thats my name; what about yours", undefined, "Say 'nyasha' to be call the bot");
 
 ChatBot.addPattern("^portfolio|project|projects", "response", " here it is",function (matches) {window.location.href='pages/portfolio.html';}, "type the name of any page you want to visit");
 ChatBot.addPattern("^about me|about", "response", " here it is",function (matches) {window.location.href='pages/about.html';}, "");
 ChatBot.addPattern("^lifestyle|gallery", "response", " here it is",function (matches) {window.location.href='pages/gallery.html';}, "");
 ChatBot.addPattern("^contact me|contact", "response", "follow me @ twitter @ nyasha chikobvore, facebook @ nyasha chikobvore, whatsapp 0775531297",undefined, "type the name of any page you want to visit");
 ChatBot.addPattern("^morning|afternoon|evening","response",greetings[i], undefined, "Say 'morning' or 'afternoon' or 'evening' to the bot' to be greeted back.");
 
 ChatBot.addPattern("^i am good","response", "ow brilliant, I am nyasha and you whats your name?", undefined, "use formal English to communicate'");
 ChatBot.addPattern("^i am a|work","response", "thats good, so how is work?", undefined, "");
 ChatBot.addPattern("^thats good","response", "thanks", undefined, "");
 ChatBot.addPattern("^where is nyasha|looking for nyasha","response", nyasha[i], undefined, "");
 
 ChatBot.addPattern("^i live in|i stay in (.*)","response", stays[i], undefined, "");
 ChatBot.addPattern("^is good|fine","response","thats good", undefined, "");
 
 ChatBot.addPattern("^chat with you","response",various[i], undefined, "");
 
 ChatBot.addPattern("^bye|good night", "response", "thanks for talking to me today enjoy your day", undefined, "Say 'Bye'  or 'night' to end the conversation.");
 ChatBot.addPattern("(?:my name is|I'm|I am) (.*)", "response", responses[i],function (matches) {ChatBot.setHumanName(matches[1]);},"");
 
 ChatBot.addPattern("(what is the )?meaning of life", "response", "42", undefined, "");
 ChatBot.addPattern("compute ([0-9]+) plus ([0-9]+)", "response", undefined, 
 function (matches) {
        ChatBot.addChatEntry("That would be "+(1*matches[1]+1*matches[2])+".","bot");
    },"Say 'compute [number] plus [number]' to make the nyasha your math monkey"); 

    // optional but for better suggests we use unibox search suggests
    $('#humanInput').unibox({
        // we use the suggest URL from the webknox engine
        suggestUrl: wx.getSuggestUrl(),
        // minimum number of characters before the suggests shows
        minChars: 1,
        enterCallbackResult: function(){},
    });
