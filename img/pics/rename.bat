FOR /L %%A IN (0,1,15) DO (
  FOR /L %%B IN (0,1,15) DO (
    REN "map [www.imagesplitter.net](4)-%%A-%%B.jpeg" "map_4_%%A-%%B.jpeg"
  )
)