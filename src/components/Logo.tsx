import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg 
      width="260" 
      height="224" 
      viewBox="0 0 260 224" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M222.045 16.9775C232.876 27.4385 241.094 39.7495 247.882 53.1166C254.476 66.1009 258.515 79.993 259.552 94.3081C260.342 105.229 259.143 116.453 257.53 127.349C255.463 141.304 249.972 154.29 242.722 166.389C229.952 187.702 212.248 203.286 189.331 213.363C170.543 221.623 151.03 224.441 130.968 222.711C110.205 220.922 91.3272 213.586 74.8633 200.308C57.9415 186.66 45.9065 169.661 37.9671 149.537C37.468 148.272 35.0763 147.021 33.5593 147.014C25.7785 146.977 18.0206 147.062 10.6865 143.939C8.01224 142.8 5.17791 141.772 2.88291 140.066C-1.02191 137.163 -1.00692 132.266 3.64753 128.21C9.6715 122.962 15.8743 117.399 22.9807 114.057C30.1256 110.697 32.3053 105.998 33.2152 98.882C35.6722 79.6636 42.6502 62.2736 55.8653 47.728C56.993 46.4868 57.983 45.1205 59.7929 44.1176C52.5253 61.8178 46.8965 79.6793 49.3417 99.8138C55.6493 96.8945 61.9469 93.9798 68.6225 91.343C69.0105 92.1026 69.0204 92.5843 69.0303 93.0659C63.9714 96.0228 59.0089 99.1648 53.8196 101.872C50.3398 103.687 49.0237 106.342 50.046 109.82C52.1082 116.837 54.6397 123.715 56.7714 130.713C57.8986 134.414 60.2113 135.694 63.8232 135.095C73.9923 133.408 84.2541 132.133 94.3012 129.896C107.336 126.993 120.406 123.957 133.086 119.828C152.379 113.547 171.155 105.846 188.532 95.133C191.305 93.423 194.141 91.8137 197.413 90.6277C197.93 91.4216 197.981 91.7458 198.032 92.0701C191.316 96.3553 184.923 101.299 177.816 104.792C161.742 112.692 145.565 120.494 128.968 127.19C109.746 134.944 89.5994 139.925 69.2372 143.865C68.1196 144.081 66.9238 143.893 64.739 145.018C70.5711 151.27 75.8892 158.125 82.3524 163.638C92.7591 172.513 104.83 178.871 118.245 181.967C131.101 184.935 143.967 185.542 157.287 183.418C173.247 180.872 187.584 174.912 200.401 165.786C220.987 151.127 234.245 131.009 240.049 106.328C244.982 85.3465 243.792 64.4571 235.568 44.586C231.886 35.6889 225.473 27.9222 220.295 19.0905C220.876 18.0181 221.46 17.4978 222.045 16.9775ZM16.9102 130.504C17.384 131.416 17.6807 132.947 18.3601 133.142C23.3521 134.572 28.4207 135.734 34.0991 137.138C33.127 128.873 32.3414 122.193 31.533 115.32C29.3663 116.665 26.961 117.583 25.368 119.269C22.3047 122.511 19.7015 126.188 16.9102 130.504Z" fill="currentColor"/>
      <path d="M69.3955 93.0275C69.0203 92.5837 69.0104 92.1021 68.9893 91.2593C86.7145 82.5981 104.451 74.2979 122.74 66.1543C123.408 66.4337 123.524 66.5567 123.64 66.6796C117.599 69.505 111.51 72.234 105.526 75.1759C93.5742 81.0521 81.6794 87.045 69.3955 93.0275Z" fill="currentColor"/>
      <path d="M198.388 92.0274C197.981 91.7457 197.93 91.4215 197.8 90.6111C202.863 86.229 208.07 82.417 213.125 78.4116C217.455 74.9801 221.609 71.3272 226.273 67.7363C226.823 67.8207 226.943 67.941 227.062 68.0614C223.263 71.9798 219.762 76.2586 215.588 79.7263C210.258 84.1549 204.383 87.9288 198.388 92.0274Z" fill="currentColor"/>
      <path d="M145.061 60.9746C146.216 64.7827 146.516 69.2789 152.744 69.3285C144.939 68.7247 146.544 74.9447 144.865 79.635C143.089 75.4478 141.741 72.2695 140.418 69.1505C141.242 66.9357 142.274 64.1594 143.903 61.1835C144.687 60.9807 144.874 60.9777 145.061 60.9746Z" fill="currentColor"/>
      <path d="M145.034 60.5926C144.874 60.9774 144.687 60.9805 144.219 60.979C142.853 60.5478 141.543 59.4982 140.717 59.7952C135.169 61.7897 129.723 64.0703 123.942 66.4691C123.524 66.557 123.408 66.4341 123.12 66.1251C134.933 60.7211 146.919 55.5031 158.905 50.2852C159.14 50.8298 159.374 51.3744 159.609 51.919C156.103 53.2888 152.482 54.4308 149.141 56.1254C147.496 56.96 146.369 58.8167 145.034 60.5926Z" fill="currentColor"/>
      <path d="M221.916 16.6606C221.461 17.4974 220.876 18.0177 220.134 18.7895C217.153 15.9219 214.328 12.8029 211.503 9.68378C211.754 9.352 212.004 9.02023 212.254 8.68848C215.432 11.2403 218.609 13.7922 221.916 16.6606Z" fill="currentColor"/>
      <path d="M207.638 4.31041C209.468 5.54671 210.98 6.5721 212.492 7.5975C211.952 8.20718 211.412 8.81686 210.872 9.42654C208.016 7.30156 205.161 5.17657 202.306 3.05159C202.528 2.68054 202.75 2.30951 202.972 1.93848C204.421 2.65881 205.871 3.37915 207.638 4.31041Z" fill="currentColor"/>
      <path d="M232.078 63.3798C231.239 63.4643 230.675 63.2597 230.112 63.0552C231.469 61.4723 232.825 59.8895 234.182 58.3066C234.529 58.5762 234.877 58.8458 235.225 59.1154C234.268 60.4406 233.311 61.7657 232.078 63.3798Z" fill="currentColor"/>
      <path d="M199.642 0.764582C200.417 0.488322 201.354 0.535761 202.291 0.583185C202.213 0.989099 202.136 1.39501 202.058 1.80094C201.306 1.56338 200.555 1.32583 199.642 0.764582Z" fill="currentColor"/>
      <path d="M226.526 67.5182C227.084 66.7175 227.819 66.099 228.554 65.4805C228.733 65.6209 228.912 65.7613 229.092 65.9017C228.66 66.59 228.228 67.2784 227.429 68.014C226.943 67.941 226.823 67.8207 226.526 67.5182Z" fill="currentColor"/>
      <path d="M237.031 55.7822C237.386 55.9252 237.504 56.282 237.622 56.6387C237.35 56.6674 237.077 56.696 236.804 56.7246C236.8 56.4817 236.797 56.2388 237.031 55.7822Z" fill="currentColor"/>
    </svg>
  );
}
