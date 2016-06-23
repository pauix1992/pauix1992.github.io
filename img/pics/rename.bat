FOR /L %%A IN (0,1,7) DO (
    FOR /L %%B IN (0,1,7) DO (
      REN "map [www.imagesplitter.net](4)(1)-%%A-%%B.jpeg" "map_3_%%A-%%B.jpeg"
  )
)