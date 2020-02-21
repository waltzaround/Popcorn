import Page from "../components/Page"
import Link from 'next/link'

const Feedback = () => ( 
<Page>
    <p>hello</p>
    <form>
    <textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
    </form>
    <Link href='close'>
      <button>Submit</button>
      </Link>
     
</Page>
)

export default Feedback