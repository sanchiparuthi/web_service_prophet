import express from 'express'
import { generate, count } from "random-words";

const app = express();
//const word= generate();

app.use(express.json());

const port = process.env.PORT || 3001

let prose = { 

    1:{
    name: "love",
    text: `But if in your fear you would seek only\n
    love’s peace and love’s pleasure,
    Then it is better for you that you cover
    your nakedness and pass out of love’s
    threshing-floor,
    Into the seasonless world where you
    shall laugh, but not all of your laughter,
    and weep, but not all of your tears`
    },
    
    2:{
        name: "marriage",
        text: `Give your hearts, but not into each
        other’s keeping.
             For only the hand of Life can contain
        your hearts.
             And stand together yet not too near
        together:
             For the pillars of the temple stand apart,
             And the oak tree and the cypress grow
        not in each other’s shadow.`
    },


    3:{
        name: "children",
        text: `Your children are not your children.
        They are the sons and daughters of Life’s longing for itself.
        They come through you but not from you,
        And though they are with you yet they belong not to you.
   
        You may give them your love but not your thoughts,
        For they have their own thoughts.
        You may house their bodies but not their souls,
        For their souls dwell in the house of tomorrow, which you cannot visit, not even in your dreams.
        You may strive to be like them, but seek not to make them like you.
        For life goes not backward nor tarries with yesterday.`
    },
 
 
    4: {
        name : "giving",
        text :`You often say, “I would give, but only to the deserving.”
        The trees in your orchard say not so, nor the flocks in your pasture.
        They give that they may live, for to withhold is to perish.
        Surely he who is worthy to receive his days and his nights, is worthy of all else from you.
        And he who has deserved to drink from the ocean of life deserves to fill his cup from your little stream.
        And what desert greater shall there be, than that which lies in the courage and the confidence, nay the charity, or receiving?`
    },
 
 
    5: {
        name : "pain",
        text :`Your pain is the breaking of the shell that encloses your understanding.
        Even as the stone of the fruit must break, that its heart may stand in the sun, so must you know pain.
        And could you keep your heart in wonder at the daily miracles of your life your pain would not seem less wondrous than your joy;
        And you would accept the seasons of your heart, even as you have always accepted the seasons that pass over your fields.
        And you would watch with serenity through the winters of your grief.`
    },
 
 
    6: {
        name : "beauty",
        text :`beauty is not a need but an ecstasy
        It is not a mouth thirsting nor an empty hand stretched forth,
        But rather a heart enflamed and a soul enchanted.
        It is not in the image you would see nor the song you would hear,
        But rather an image you see though you close your eyes and a song you hear though you shut your ears.
        It is not the sap within the furrowed bark, nor a wing attached to a claw,
        But rather a garden for ever in bloom and a flock of angels for ever in flight`
    },
 
 
    7: {
        name : "death",
        text :`You would know the secret of death.
        But how shall you find it unless you seek it in the heart of life?
        The owl whose night-bound eyes are blind unto the day cannot unveil the mystery of light.
        If you would indeed behold the spirit of death, open your heart wide unto the body of life.
        For life and death are one, even as the river and the sea are one.`
    },
 
 
    8: {
        name : "freedom",
        text :`And if it is a despot you would dethrone, see first that his throne erected within you is destroyed.
        For how can a tyrant rule the free and the proud, but for a tyranny in their own freedom and a shame in their own pride?
        And if it is a care you would cast off, that care has been chosen by you rather than imposed upon you.
        And if it is a fear you would dispel, the seat of that fear is in your heart and not in the hand of the feared. `
    },
 
 
    9: {
        name : "time",
        text :`Who among you does not feel that his power to love is boundless?
        And yet who does not feel that very love, though boundless, encompassed within the centre of his being, and moving not from love thought to love thought, nor from love deeds to other love deeds?
        And is not time even as love is, undivided and spaceless?
   
        But if in your thought you must measure time into seasons, let each season encircle all the other seasons,
        And let today embrace the past with remembrance and the future with longing.`
    }

    }

app.get('/', (req, res) =>{
    let prophetOn =[];
    Object.keys(prose).forEach((key, value) => {
if(req.query.name == prose[key].name){
    prophetOn.push(key).text
}
    })
    res.send(prophetOn)
});



app.get("/id/:id/" ,(req,res) => {
    let texts =[];
    Object.keys(prose).forEach((key,value) =>{
        let n = `:${key}`;
        console.log(req.params.id)
        if(req.params.id == n){
            texts.push(prose[key].text);
        }
    })
    res.send(texts)
})

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})
