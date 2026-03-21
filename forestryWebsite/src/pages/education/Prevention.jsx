import firePrevention from "./pictures/51685102766_2df65f0cff_b.jpg";


export default function Prevention() {
    return (
        <div class="edu-card">

            <img
                src={firePrevention}
                alt="Fire Prevention"
                title="Photo from openverse, 2021 BLM Fire Employee Photo Contest Winner Category: Fire Prevention, Education, and Investigation by National Interagency Fire Center.">
            </img>

            <h3>Prevention</h3>
            <p>Here in Canada half of forest fires are caused by lightning, but the other half is caused by humans.
                Wether it be cigarette buds or campfires or even just driving, there are many ways people can cause wildfires.
                Here we have compiled some tips to help avoid starting accidental fires.
            </p>
            <ul>
                <li>Be mindful of cigarettes, being sure to wet butts before disposing them and to never discard them on the ground,
                    out vehicle windows, soils materials(like potting soil, plant pots, etc), and especially dry, grassy areas.
                </li>
                <li>Be careful when burning debris, especially during windy conditions or when it's restricted.</li>
                <li>Make sure that fireworks are allowed before lighting and that they are handled properly.</li>
                <li>Always build campfires in an open cleared location and be sure to keep away from flammables.</li>
                <li>Be sure to douse fires until they are sufficiently cold.</li>
                <li>Avoiding driving or parking over dry grass as exhaust temperatures can start fires, especially in summer.</li>
                <li>Maintain equipment and vehicles. Both can cause cause sparks when not properly maintained.</li>
            </ul>
            <p>While it may seem overly cautious, fires move quickly. Being aware and knowing what to avoid and look out for can
                stop a fire before it can start.
            </p>
        </div>
    );
}