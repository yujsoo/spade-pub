import DaumPostcodeEmbed from 'react-daum-postcode';

interface AddressSearchProps {
  onComplete: (zipcode: string, address: string) => void;
}

function AddressSearch({ onComplete }: AddressSearchProps) {
  const handleComplete = (data: any) => {
    const { zonecode, address } = data;

    onComplete(zonecode, address);
  };

  return (
    <div>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </div>
  );
}

export default AddressSearch;
