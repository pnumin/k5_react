
export default function TailCard({ imgSrc, title, subtitle, tags }) {
  let sps = tags.split(',') ;
  sps = sps.map((item, idx) => 
    <span key={`sp${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {item}
    </span>
  )
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={imgSrc} alt={title} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">
            {subtitle}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {sps}          
        </div>
    </div>
  )
}
