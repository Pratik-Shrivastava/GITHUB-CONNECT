import React from 'react'

const Features = () => {
    return (
        <div className="container px-4 py-2" id="featured-3">
            <h2 className="pb-2">How to use it</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="p-4 rounded border bg-light shadow-sm">
                        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
                <div className="feature col">
                    <div className="p-4 rounded border bg-light shadow-sm">
                        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
                <div className="feature col">
                    <div className="p-4 rounded border bg-light shadow-sm">
                        <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
