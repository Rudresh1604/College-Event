import React from "react";
import EventForm from "../Form/EventForm";
import Header from "../../Components/Header";

function CSIEvent() {
  return (
    <div>
      <div>
        <Header />

        <div class="md:mt-44 mt-12 py-2 flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <h1 className="text-2xl">Welcom To the CSI Club</h1>
        </div>
        <div className="px-12">
          <h1 className="text-center text-3xl text-teal-400 py-4">
            CodeSoft Event
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            consequatur quo temporibus sint iusto suscipit placeat quas enim
            repudiandae id nostrum ab iure accusamus tempora, excepturi, dolorem
            libero alias ratione quam. Ea quod sed quae consequatur. Sapiente
            nemo repudiandae facere libero voluptatem, assumenda nulla modi
            asperiores, possimus quae totam laborum. Quis animi voluptatibus
            error, ipsa temporibus ducimus omnis, fuga autem sunt unde eos
            quibusdam fugit amet sapiente similique explicabo ea aperiam quas
            quisquam voluptatem dignissimos cum architecto recusandae facere?
            Veritatis soluta ipsam saepe rem aut. Pariatur, est numquam odio,
            voluptatibus consequuntur mollitia at distinctio doloremque modi
            nesciunt ad reprehenderit nihil!
          </p>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quam deleniti sapiente qui quaerat placeat earum, ut pariatur dicta
            hic, adipisci recusandae voluptatum corrupti impedit eaque
            asperiores libero ab natus quae repellendus consectetur vitae,
            aspernatur quo. Repudiandae, voluptate suscipit. Expedita, eveniet
            laborum ipsum, voluptatem molestiae voluptatibus, blanditiis ipsa
            illo ullam odio qui reiciendis pariatur nihil. Ipsam deleniti
            facilis hic fugiat incidunt aut sint rerum! Rem officiis nulla
            recusandae cum laudantium tenetur quas aliquid nam facilis eius
            animi labore, eaque ea necessitatibus veniam reprehenderit ipsum
            corrupti repellat repudiandae, impedit distinctio optio vero. Vitae
            quasi eaque quas quam autem ab reprehenderit dolores.
          </p>
        </div>

        <EventForm user={"CSI Club"} />
      </div>
    </div>
  );
}

export default CSIEvent;
