
 // get you mashape api key here: https://market.mashape.com/webknox/question-answering
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
     inputCapabilityListing: false,
     engines: [wx],
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
     "ow its you $1, sorry i lost contacts, how is it over there",
     "sorry i am kind of lost which $1 is this one",
     "hey wasup $1"
 ];
 var i = Math.round(Math.random()*5);
 ChatBot.init(config);
 ChatBot.setBotName("Nyasha");
 ChatBot.addPattern("^hie$|hello$|hey$", "response",greetings[i], undefined, "Say 'Hi' to be greeted back.");
 ChatBot.addPattern("^nyasha|Nyasha$", "response", "yes thats my name; what about yours", undefined, "Say 'Hi' to be greeted back.");
 ChatBot.addPattern("^morning$|afternoon$|evening$","response",greetings[i], undefined, "Say 'Hi' to be greeted back.");
 ChatBot.addPattern("^i am good$|good and you$","response", "ow brilliant, I am nyasha and you whats your name?", undefined, "Say 'Hi' to be greeted back.");
 ChatBot.addPattern("^bye$|good night$|night", "response", "thanks for talking to me today enjoy your day", undefined, "Say 'Bye' to end the conversation.");
 ChatBot.addPattern("^in$|i stay$|i$", "response", "thanks for talking to me today enjoy your day", undefined, "Say 'Bye' to end the conversation.");
 
 ChatBot.addPattern("(?:my name is|I'm|I am|) (.*)", "response", responses[i],function (matches) {ChatBot.setHumanName(matches[1]);},"");
 
 ChatBot.addPattern("(?:i do|a) (.*)", "response", "ow $1, i like that one", undefined,"");
 
 ChatBot.addPattern("(what is the )?meaning of life", "response", "42", undefined, "Say 'What is the meaning of life' to get the answer.");
 ChatBot.addPattern("compute ([0-9]+) plus ([0-9]+)", "response", undefined, 
 function (matches) {
        ChatBot.addChatEntry("That would be "+(1*matches[1]+1*matches[2])+".","bot");
    },"Say 'compute [number] plus [number]' to make the bot your math monkey"); 

    // optional but for better suggests we use unibox search suggests
    $('#humanInput').unibox({
        // we use the suggest URL from the webknox engine
        suggestUrl: wx.getSuggestUrl(),
        // minimum number of characters before the suggests shows
        minChars: 1,
        enterCallbackResult: function(){},
    });