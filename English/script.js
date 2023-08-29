const soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");



const quotess = [{
    quote: `For we are the circumcision, which worship God in the spirit, and rejoice in Christ Jesus, and have no confidence in the flesh."`,
    writer:`Philippians 3:3 (KJV)`
},{
    quote:`For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.`,
    writer:`2 Corinthians 5:21 (KJV)`
},{
    quote:`For whosoever will save his life shall lose it; but whosoever shall lose his life for my sake and the gospel's, the same shall save it.`,
    writer:`Mark 8:35 (KJV)`
},{
    quote:`Wherefore gird up the loins of your mind, be sober, and hope to the end for the grace that is to be brought unto you at the revelation of Jesus Christ`,
    writer:` Peter 1:13 (KJV)`
},{
    quote:`Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.`,
    writer:` John 11:25 (KJV)`
},{
    quote:`If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.`,
    writer:`1 John 1:9 (KJV)`
},{
    quote:`Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.`,
    writer:`Acts 4:12 (KJV)`
},{
    quote:`¹⁶ Rejoice evermore.
    ¹⁷ Pray without ceasing.
    ¹⁸ In every thing give thanks: for this is the will of God in Christ Jesus concerning you`,
    writer:`1 Thessalonians 5 (KJV)`
},{
    quote:`And we know that all things work together for good to them that love God, to them who are the called according to his purpose.`,
    writer:`Romans 8:28 (KJV)`
},{
    quote:`And he humbled thee, and suffered thee to hunger, and fed thee with manna, which thou knewest not, neither did thy fathers know; that he might make thee know that man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD doth man live.`,
    writer:`Deuteronomy 8:3 (KJV)`
},{
    quote:`My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever.`,
    writer:`Psalms 73:26 (KJV)`
},{
    quote:`What shall we then say to these things? If God be for us, who can be against us?`,
    writer:`Romans 8:31 (KJV)`
},{
    quote:`Wherefore gird up the loins of your mind, be sober, and hope to the end for the grace that is to be brought unto you at the revelation of Jesus Christ;`,
    writer:`1 Peter 1:13 (KJV)`
},{
    quote:`A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.`,
    writer:`Ezekiel 36:26 (KJV)`
},{
    quote:`⁹ For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus Christ,
    ¹⁰ Who died for us, that, whether we wake or sleep, we should live together with him.`,
    writer:`1 Thessalonians 5 (KJV)`
},{
    quote:`¹⁵ For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin.
    ¹⁶ Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.`,
    writer:`Hebrews 4 (KJV)`
},{
    quote:`¹ In the beginning was the Word, and the Word was with God, and the Word was God.
    ² The same was in the beginning with God.`,
    writer:`John 1 (KJV)`
},{
    quote:`One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to enquire in his temple.`,
    writer:`Psalms 27:4 (KJV)`
},{
    quote:`I can do all things through Christ which strengtheneth me.`,
    writer:`Philippians 4:13 (KJV)`
},{
    quote:`For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.`,
    writer:`Jeremiah 29:11 (KJV)`
},{
    quote:`Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.`,
    writer:`Joshua 1:9 (KJV)`
},{
    quote:`⁸ For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:
    ⁹ Not of works, lest any man should boast.`,
    writer:`Ephesians 2 (KJV)`
},{
    quote:`That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.`,
    writer:`Romans 10:9 (KJV)`
},{
    quote:`That which is born of the flesh is flesh; and that which is born of the Spirit is spirit.`,
    writer:`John 3:6 (KJV)`
},{
    quote:`⁵ Trust in the LORD with all thine heart; and lean not unto thine own understanding.
    ⁶ In all thy ways acknowledge him, and he shall direct thy paths.`,
    writer:`Proverbs 3 (KJV)`
},{
    quote:`Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.`,
    writer:`Philippians 4:6 (KJV)`
},{
    quote:`But be ye doers of the word, and not hearers only, deceiving your own selves.`,
    writer:`James 1:22 (KJV)`
},{
    quote:`Ye are the light of the world. A city that is set on an hill cannot be hid.`,
    writer:`Matthew 5:14 (KJV)`
},{
    quote:`Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.`,
    writer:`Colossians 3:16 (KJV)`
},{
    quote:`I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.`,
    writer:`Psalms 4:8 (KJV)`
},{
    quote:`¹⁸ The LORD is nigh unto all them that call upon him, to all that call upon him in truth.
    ¹⁹ He will fulfil the desire of them that fear him: he also will hear their cry, and will save them`,
    writer:`Psalms 145 (KJV)`
},{
    quote:`²⁵ Be not afraid of sudden fear, neither of the desolation of the wicked, when it cometh.
    ²⁶ For the LORD shall be thy confidence, and shall keep thy foot from being taken.`,
    writer:`Proverbs 3 (KJV)`
},{
    quote:`Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.`,
    writer:`Isaiah 26:3 (KJV)`
},{
    quote:`Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.`,
    writer:`Isaiah 41:10 (KJV)`
},{
    quote:`By this shall all men know that ye are my disciples, if ye have love one to another.`,
    writer:`John 13:35 (KJV)`
},{
    quote:`Greater love hath no man than this, that a man lay down his life for his friends.`,
    writer:`John 15:13 (KJV)`
},{
    quote:`Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:`,
    writer:`Romans 5:1 (KJV)`
},{
    quote:`For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,`,
    writer:`Romans 8:38 (KJV)`
},{
    quote:`So then faith cometh by hearing, and hearing by the word of God.`,
    writer:`Romans 10:17 (KJV)`
},{
    quote:`Wherefore let him that thinketh he standeth take heed lest he fall.`,
    writer:`1 Corinthians 10:12 (KJV)`
},{
    quote:`But as it is written, Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him.`,
    writer:`1 Corinthians 2:9 (KJV)`
},{
    quote:`For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.`,
    writer:`2 Corinthians 5:21 (KJV)`
},{
    quote:`²² But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,
    ²³ Meekness, temperance: against such there is no law.`,
    writer:`Galatians 5 (KJV)`
},{
    quote:`Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:`,
    writer:`Philippians 1:6 (KJV)`
},{
    quote:`But my God shall supply all your need according to his riches in glory by Christ Jesus`,
    writer:`Philippians 4:19 (KJV)`
},{
    quote:`And whatsoever ye do, do it heartily, as to the Lord, and not unto men;`,
    writer:`Colossians 3:23 (KJV)`
},{
    quote:`By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.`,
    writer:`Hebrews 13:15 (KJV)`
},{
    quote:`Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.`,
    writer:`James 5:16 (KJV)`
},{
    quote:`But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:`,
    writer:`1 Peter 2:9 (KJV)`
},{
    quote:`Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.`,
    writer:`1 Peter 2:24 (KJV)`
},{
    quote:`Casting all your care upon him; for he careth for you.`,
    writer:`1 Peter 5:7 (KJV)`
},{
    quote:`This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all.`,
    writer:`1 John 1:5 (KJV)`
},{
    quote:`And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.`,
    writer:`Revelation 21:4 (KJV)`
},{
    quote:`⁴⁷ And my spirit hath rejoiced in God my Saviour.
    ⁴⁸ For he hath regarded the low estate of his handmaiden: for, behold, from henceforth all generations shall call me blessed.`,
    writer:`Luke 1 (KJV)`
},{
    quote:`Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.`,
    writer:`Romans 8:26 (KJV)`
},{
    quote:`Teach me to do thy will; for thou art my God: thy spirit is good; lead me into the land of uprightness.`,
    writer:`Psalms 143:10 (KJV)`
},{
    quote:`For as many as are led by the Spirit of God, they are the sons of God.`,
    writer:`Romans 8:14 (KJV)`
},{
    quote:`For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father.`,
    writer:`Romans 8:15 (KJV)`
},{
    quote:`Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?`,
    writer:`Romans 8:35 (KJV)`
},{
    quote:`There is none like unto the God of Jeshurun, who rideth upon the heaven in thy help, and in his excellency on the sky.`,
    writer:`Deuteronomy 33:26 (KJV)`
},{
    quote:`And almost all things are by the law purged with blood; and without shedding of blood is no remission.`,
    writer:`Hebrews 9:22 (KJV)`
},{
    quote:`Brethren, be followers together of me, and mark them which walk so as ye have us for an ensample.`,
    writer:`Philippians 3:17 (KJV)`
},{
    quote:`²⁰ For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ:
    ²¹ Who shall change our vile body, that it may be fashioned like unto his glorious body, according to the working whereby he is able even to subdue all things unto himself.`,
    writer:`Philippians 3 (KJV)`
},{
    quote:`I know that thou canst do every thing, and that no thought can be withholden from thee.`,
    writer:` Job 42:2 (KJV)`
},{
    quote:`Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah:`,
    writer:`Jeremiah 31:31 (KJV)`
},{
    quote:`For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.`,
    writer:`2 Timothy 1:7 (KJV)`
},{
    quote:`For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.`,
    writer:`Isaiah 9:6 (KJV)`
},{
    quote:`Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.`,
    writer:`2 Corinthians 5:17 (KJV)`
},{
    quote:`Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.`,
    writer:`1 John 4:7 (KJV)`
},{
    quote:`Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.`,
    writer:`Matthew 5:16 (KJV)`
},{
    quote:`⁵ And they said unto him, In Bethlehem of Judaea: for thus it is written by the prophet,
    ⁶ And thou Bethlehem, in the land of Juda, art not the least among the princes of Juda: for out of thee shall come a Governor, that shall rule my people Israel.`,
    writer:`Matthew 2 (KJV)`
},{
    quote:`And Nathanael said unto him, Can there any good thing come out of Nazareth? Philip saith unto him, Come and see.`,
    writer:`John 1:46 (KJV)`
},{
    quote:`If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.`,
    writer:`James 1:5 (KJV)`
},{
    quote:`For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil.`,
    writer:`Ecclesiastes 12:14 (KJV)`
},{
    quote:`Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.`,
    writer:`Psalms 19:14 (KJV)`
},{
    quote:`Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)`,
    writer:`Ephesians 2:5 (KJV)`
},{
    quote:`And one of the elders saith unto me, Weep not: behold, the Lion of the tribe of Juda, the Root of David, hath prevailed to open the book, and to loose the seven seals thereof.`,
    writer:`Revelation 5:5 (KJV)`
},{
    quote:`For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ:`,
    writer:`Philippians 3:20 (KJV)`
},{
    quote:`For we are the circumcision, which worship God in the spirit, and rejoice in Christ Jesus, and have no confidence in the flesh.`,
    writer:`Philippians 3:3 (KJV)`
},{
    quote:`The grace of our Lord Jesus Christ be with you all. Amen. (To the Philippians written from Rome, by Epaphroditus.)`,
    writer:`Philippians 4:23 (KJV)`
},{
    quote:`²⁶ Be ye angry, and sin not: let not the sun go down upon your wrath:
    ²⁷ Neither give place to the devil.`,
    writer:`Ephesians 4 (KJV)`
},{
    quote:`The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.`,
    writer:`2 Peter 3:9 (KJV)`
},{
    quote:`¹⁵ If ye love me, keep my commandments.
    ¹⁶ And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;`,
    writer:`John 14 (KJV)`
},{
    quote:`For who is God save the LORD? or who is a rock save our God?`,
    writer:`Psalms 18:31 (KJV)`
},
] 


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    btn.classList.add("loading");
    btn.innerHTML = "Loading verse...";
    let random = Math.floor(Math.random() * quotess.length);

    quote.innerHTML = quotess[random].quote;
    writer.innerHTML = quotess[random].writer;
    btn.innerHTML = "New Verse";
})

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML} says ${writer.innerHTML}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerHTML);
});

twitterBtn.addEventListener("click", ()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url=${quote.innerHTML} `;
    window.open(tweeturl,"_blank")
});