import SomeProductGrid from '@/components/features/SomeProductGrid';
import TitleWithDescription from '@/components/ui/TitleWithDescription';
import React from 'react'

const SomeProduct = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-5">
      <TitleWithDescription
        title="Maybe You Like"
        description="Mirum est notare quam littera gothica quam nunc putamus parum claram!"
      />
      <SomeProductGrid />
    </section>
  );
}

export default SomeProduct
