
Pod::Spec.new do |s|
  s.name         = "RNPointerInteractions"
  s.version      = "1.0.0"
  s.summary      = "RNPointerInteractions"
  s.description  = <<-DESC
                  RNPointerInteractions
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNPointerInteractions.git", :tag => "master" }
  s.source_files  = "RNPointerInteractions/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  