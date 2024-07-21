"use client"

import { Billboard } from '@/types'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import Billboards from '@/components/ui/billboard'
import { useState, useEffect } from 'react'
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"

interface FeaturedBillboardsProps {
    billboards?: Billboard[]
}

const FeaturedBillboards = ({ billboards }: FeaturedBillboardsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
 
           
    <Carousel 
        className="w-full" 
        orientation='horizontal' 
        setApi={setApi} 
        opts={{ loop: true }} 
        plugins={[
            Autoplay({
              delay: 10000,
            }),
            Fade({
                
            })
            
          ]}
    >
        
      <CarouselContent>
      
        {billboards?.map((billboard) => (
          
          <CarouselItem key={billboard.id} >
               
                <Billboards data={billboard} />
               
                       
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      
    </Carousel>
 
  )
}

export default FeaturedBillboards