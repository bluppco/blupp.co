import { useState } from "react"
import { Toaster, toast } from "sonner"
import { Turnstile } from '@marsidev/react-turnstile'

// IMPORTS JSX LAYOUTS
import Container from "@/layouts/Container"

const ContactFormJSX = ( props ) => {

    const {

        cy,
        type,

    } = props

    const [ turnstileToken, updateTurnstileToken ] = useState("")
    const [ state, updateState ] = useState({

        email: "",
        message: "",
        phone: "",
        name: "",
        subject: "",
        processing: false,
        processed: false,

    })
    const onChangeValue = ( event ) => {

        updateState({

            ...state,
            [ event.target.name]: event.target.value

        })

    }
    const triggerFormPOST = async () => {

        if( state.email !== "" && state.name !== "" && state.phone !== "" && state.subject !== "" && state.message !== "" && turnstileToken !== "" ){

            updateState({

                ...state,
                processing: true

            })
            const body = JSON.stringify({

                email: state.email,
                message: state.message,
                phone: state.phone,
                name: state.name,
                subject: state.subject,
                type: type,
                turnstileToken: turnstileToken,

            })
            const url = "https://bluppco.api.blupp.co/contact"
            const options = {

                body: body,
                method: "POST",
                headers: {

                    "Content-Type": "application/json"

                }

            }
            const response = await fetch( url, options )
            if( response.status === 201 ){

                toast.success("We will contact you shortly!")
                updateState({

                    ...state,
                    email: "",
                    message: "",
                    phone: "",
                    name: "",
                    subject: "",
                    processing: false,
                    processed: true

                })

            } else {

                updateState({

                    ...state,
                    processing: false

                })

            }

        } else {

            toast.error('Invalid request information')

        }

    }

    return (
        <Container>
            <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-the_seasons pb-4">Get in Touch</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <p className="font-the_seasons">Name<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder="Name"
                            className="h-10 w-full border border-zinc-400 rounded px-2.5 text-sm mt-1"
                            value={ state.name }
                            name="name"
                            onChange={ ( event ) => onChangeValue( event ) }
                        />
                    </div>
                    <div>
                        <p className="font-the_seasons font-medium">Email<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder="Email"
                            className="h-10 w-full border border-zinc-400 rounded px-2.5 text-sm mt-1"
                            value={ state.email }
                            name="email"
                            onChange={ ( event ) => onChangeValue( event ) }
                        />
                    </div>
                    <div>
                        <p className="font-the_seasons">Phone Number<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="h-10 w-full border border-zinc-400 rounded px-2.5 text-sm mt-1"
                            value={ state.phone }
                            name="phone"
                            onChange={ ( event ) => onChangeValue( event ) }
                        />
                    </div>
                    <div>
                        <p className="font-the_seasons">Subject<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="h-10 w-full border border-zinc-400 rounded px-2.5 text-sm mt-1"
                            value={ state.subject }
                            name="subject"
                            onChange={ ( event ) => onChangeValue( event ) }
                        />
                    </div>
                </div>
                <p className="font-the_seasons">Message<sup>*</sup></p>
                <textarea
                    type="text-box"
                    placeholder="Message"
                    className="h-24 w-full border border-zinc-400 rounded p-2.5 text-sm mt-1 resize-none"
                    value={ state.message }
                    name="message"
                    onChange={ ( event ) => onChangeValue( event ) }
                ></textarea>
                <Turnstile
                    siteKey="0x4AAAAAAAOfA3BnLZ8S-_Kf"
                    onSuccess={ ( token ) => updateTurnstileToken( token ) }
                    className="w-full bg-zinc-200 rounded hidden"
                />
                <div className="pt-1 md:pt-2">
                    {

                        state.processing &&
                        <button className="h-10 w-full bg-black rounded text-white items-center flex justify-center" data-cy={ cy } id={ cy }>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </button>

                    }
                    {

                        !state.processing &&
                        <button className="h-10 w-fit px-6 rounded-lg text-white font-the_seasons tracking-widest bg-black hover:bg-white hover:text-black border border-zinc-300 flex items-center" data-cy={ cy } id={ cy } onClick={ () => triggerFormPOST( state ) }>Submit</button>

                    }
                    {

                        state.processed &&
                        <section className="mt-4">
                            <p className="font-semibold">Thanks for contacting us. We will get back to you soon.</p>
                        </section>
                    }
                </div>
                <Toaster />
            </div>
        </Container>

    )

}

export default ContactFormJSX
