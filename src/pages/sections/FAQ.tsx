import Accordion from "../components/Accordion";

const FAQ = () => {
    return (

        <div className="max-w-[1440px] mx-auto my-10 grid grid-cols-2 gap-3">

                < Accordion 
                title="What is StreamVibe?"
                number="01"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
                < Accordion 
                title="How much does StreamVibe cost?"
                number="02"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
                < Accordion 
                title="What content is available on StreamVibe?"
                number="03"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
                < Accordion 
                title="How can I watch StreamVibe?"
                number="04"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
                < Accordion 
                title="How do I sign up for StreamVibe?"
                number="05"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
                < Accordion 
                title="What is the StreamVibe free trial?"
                number="06"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
                < Accordion 
                title="How do I contact StreamVibe customer support?"
                number="07"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
                < Accordion 
                title="What are the StreamVibe payment methods?"
                number="08"
                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."/>
        </div>
    )
}

export default FAQ;