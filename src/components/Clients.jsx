import { clients } from "../data";


const Clients = () => (
  <section className='flex my-[5vh] items-center justify-center py-4'>
    <div className='flex flex-wrap items-center justify-center w-full'>
    
      {clients.map((client) => (
        <div key={client.id} className='flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5'>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
