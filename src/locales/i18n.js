import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import menuen from './en/menu';
import menuvi from './en/menu';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
          coming:"Coming soon",
          menu1: "About Us",
          menu2: "Services",
          menu3: "Customers",
          menu4: "Contact",
          brandname:"IIJ Global Solutions Vietnam",
          brandname2:"FPT Telecom",
        
          tophead: "Reach a new milestone when comprehensively upgrading the cloud computing infrastructure to enhance business productivity and flexibility with turn-key cloud technology ",
          titleone: "which is integrated",

          toptitle:"The global standard qualified cloud platform with local touch for all enterprises in Vietnam",
          title2: "Japanese Technical Foundation and FPT Data Centers",

          title3: "years experience of cloud service R&D globally over 20,000+ servers, 100,000+ VMs, 500+ PB storage, and 9 countries",
          title4: "Support by Locally made Experts",
          title5: "Data Centers in Hanoi & HCM meets ISO standards for design, construction and operation according to Vietnam & World Standards",
          title6: "businesses in various fields( Finance, E-commerce, Retail, etc.)",
          title7: "High-experienced Technical Experts (Japanese & Vietnamese)",
          title8: "Quality certifications for cloud computing services ISO/IEC 27017:2015 and security standards PCI DSS v3.2.1",
          title9: "Guarantee at least 99.99% of uptime in SLAs",

          title10: " is a subsidiary of IIJ Group, which has been leading as a pioneer in the field of enterprise networks, infrastructure, and cloud solutions around the globe since its establishment in 1992. ​Established in 2016, with the mission of enhancing business productivity and flexibility to go one step further, we provide turn-key cloud & security solutions, and IT consulting & system integration service in Vietnam.",
          title11: "is one of Vietnam’s most comprehensive and broadly adopted Cloud and IT services providers, offering a full spectrum of services nationwide.​",


          title12: "Comprehensive Security Capabilities​",
          title13: "Scalability based on a PAYG model ​",
          title14: "High-Speed Performance ​",
          title15: "Stability & Disaster recovery infrastructure​",
          title16: "High Availability ​",
          title17: "Advanced Customization",


          title18: "Gen. 2 upgrades the cloud computing infrastructure from physical system to the virtual machine, and new services according to modern trends, so that businesses have a new experience in cloud computing infrastruture and HIGIO Cloud migration",


          title19: "We provide HI GIO Public Compute for all enterprises that need flexible and affordable cloud platform by the free-hand designable services, which are selected from on-demand instances, virtual storage, and network add-ins. We cover them all up with a single service offer from small to large scale.",
          title20: "We provide HI GIO Dedicated Compute for large enterprises that need fully dedicated cloud platform for compliance and governance by offering business reserved hosts which ensure their resources do not share with other customers.",

          title21: "We provide HI GIO BaaS for all enterprises that need protect their data in the cloud environments, on-premises virtualization environment, and physical servers by the comprehensive backup solution. This solution can back-up multiple platforms such as Centos, RedHat, Ubuntu, Windows, etc.",
          title22: "We provide HI GIO DRaaS for all enterprises that need to initiate secure data replication to another region such as on-premises to HI GIO Cloud, HI GIO Cloud Ho Chi Minh to HI GIO Cloud Hanoi, or vice versa by setting up HI GIO DRaaS on their resource servers. Furthermore, the RPO with a minimum value is 5 mins which is suitable for their critical system.",

          title23: "We provide HI GIO Network & Security that all enterprises’ network and security who need to address their particular protection and compliance requirements by fine-grained protections at host, network, and application levels such as Distributed Firewall, Edge Firewall, Web Application Firewall (WAF), Third Party Firewall (Checkpoint, Fortigate), Zero Trust Network Access (ZTNA).g",
          title24: "We provide HI GIO Kubernetes for all enterprises that need a managed Kubernetes service that makes it easy to run Kubernetes on HI GIO by automatically managing the availability and scalability of the Kubernetes control plane to the nodes, which is responsible for scheduling containers, managing application availability, storing cluster data, and other key tasks.",

          title25: "We provide HI GIO DBaaS for all enterprises that need a software service to set up, operate, and scale databases without having to understand or manage the underlying structure by ensuring database functionality, maintenance, updates, and infrastructure.",
          title26: "We provide HI GIO Object Storage for all enterprises that need a technology that stores and manages data in an unstructured format called objects. Modern organizations create and analyze large volumes of unstructured data such as photos, videos, web pages, sensor data, and audio files. This solution will be suitable with Data Lake, Cloud-native application data, Data Archiving, Backup and Recovery.",

          
          title27: "OUR CUSTOMERS",
          title28: "Companies are achieving remarkable results with HI GIO CLOUD. Read their innovative stories.",

          title29: "Việt Á Bank provides a full range of financial products and services to our customers. Our vision is to become the best commercial bank in Vietnam. We understand that technology will become the most competitive advantage in the nearest future and it will help us to crucially transform the quality of service and customers experience. That is why we always pay attention to the latest technology trends and invest in information technology. Migration all our data to the Private Cloud of HI GIO CLOUD is an important step for us. We invest in technology and platform to keep up with the Digital Banking trend. The ability to provide top-quality services, high-speed information processing and strong security are extremely important factors for a bank. And HI GIO CLOUD provides us with all these features as its outstanding service advantages. We believe that HI GIO CLOUD is the best choice for our needs and it meets all requirements of our Việt Á Bank.",
          title30: "Mr. Nghiem Sy Thang Deputy CIO ",

          title31: "Family Mart is one of the most popular convenience stores in Vietnam. Our mission is to bring satisfaction and happiness to our customers. We chose HI GIO CLOUD as our IT system infrastructure to provide various services to our precious customers in order to significantly transform customers’ experience. The availability, stability, and high quality of the cloud platform were the key factors for us in choosing HI GIO CLOUD. We believe that HI GIO CLOUD is the only reliable platform to meet our business needs.",
          title32: "Mr. Takehiko Kigure ",

          title33: "- Information Technology Department, Việt Á Bank",
          title34: "General Director, Family Mart Vietnam",


          title35: "HI GIO Cloud not only provides a reliable system, but also ensures 24/7 technical support for the entire IT infrastructure of TOKYOLIFE such as the sales and payment core system for the entire chain (App -DB). ); e-commerce web system; financial accounting system. With simple administration through Webportal, using HI GIO Cloud becomes easy and convenient. Notably, HI GIO is a big brand known for its high reputation and reliability in the information technology industry. With the guarantee by FPT, a leading technology company, users can be completely assured in terms of information security and service reliability.",
          title36: "Mr. Nguyễn Mạnh Cường ",
          title37: "CTO, ForLife Vietnam",

          title38: "Ensuring cost optimization, more flexible system deployment time, avoiding the risk of data loss, ensuring continuity without downtime when using HI GIO Cloud infrastructure on the internal data management system . Limit the risk of data problems being attacked, the cost of buying anti-malware licesen",
          title39: "Mr. Nguyễn Tiến Thành ",
          title40: "IT Manager, InfoPlus",


        }
      },
      vn: {
        translation: {
          coming:"Sắp ra mắt",

          menu1: "Về chúng tôi",
          menu2: "Dịch vụ",
          menu3: "Khách hàng",
          menu4: "Liên hệ",

          tophead: "Bứt phá khi nâng cấp toàn diện hạ tầng điện toán đám mây giúp doanh nghiệp nâng cao năng suất và tính linh hoạt với giải pháp điện toán đám mây tiên tiến",
          titleone: "được phát triển dựa trên",
          title2: "Nền Tảng Công Nghệ Nhật Bản và Trung Tâm Dữ Liệu FPT",
          toptitle:"Nền tảng điện toán đám mây đủ tiêu chuẩn toàn cầu với liên kết cục bộ dành cho mọi doanh nghiệp tại Việt Nam",


          title3: "năm kinh nghiệm về nghiên cứu và phát triển dịch vụ đám mây trên toàn cầu với hơn 20.000 máy chủ, hơn 100.000 máy ảo, hơn 500 bộ lưu trữ PB và 9 quốc gia",
          title4: "Các chuyên gia có kinh nghiệm hỗ trợ doanh nghiệp mọi thời điểm",
          title5: "trung tâm dữ liệu FPT Telecom đạt tiêu chuẩn ISO về thiết kế, xây dựng và vận hành theo tiêu chuẩn toàn cầu",
          title6: "doanh nghiệp trong nhiều lĩnh vực sử dụng HI GIO Clound (Tài chính, TMDT, Bán lẻ)",
          title7: "chuyên gia/ kỹ sư công nghệ có trình độ cao",
          title8: "chứng nhận chất lượng, giải thưởng danh giá cho dịch vụ điện toán đám mây ISO/IEC 27017:2015 và tiêu chuẩn bảo mật PCI DSS v3.2.1",
          title9: "đảm bảo 99,99% thời gian sẵn sàng hoạt động",

          title10: " được thành lập vào năm 2016, là thành viên của IIJ Group (nhà cung cấp dịch vụ Internet thương mại đầu tiên của Nhật Bản và là một trong những nhà cung cấp nền tảng hạ tầng đám mây lớn trên thế giới kể từ 1992), với sứ mệnh Nâng cao năng suất và tính linh hoạt cho doanh nghiệp nhờ giải pháp điện toán đám mây tiên tiến & công nghệ bảo mật theo chất lượng và sự tin cậy Nhật Bản.​",
          title11: " là một trong những công ty viễn thông và CNTT hàng đầu tại Việt Nam, cung cấp cho khách hàng những dịch vụ, cơ sở hạ tầng CNTT linh hoạt phù hợp với từng mô hình doanh nghiệp, góp phần nâng cao khả năng cạnh tranh và sự thành công trên con đường phát triển của doanh nghiệp​.​",


          title12: "Bảo mật toàn diện",
          title13: "Dễ Dàng Mở Rộng Tài Nguyên Theo Yêu Cầu Của Doanh Nghiệp",
          title14: "Hiệu suất vượt trội",
          title15: "Hạ Tầng Có Độ Ổn Định Cao & Khả Năng Phụ Hồi Sau Thảm Họa",
          title16: "Độ Sẵn Sàng Cao",
          title17: "Dễ Dàng Thiết Kế Để Đáp Ứng Độ Phức Tạp Của Hệ Thống Doanh Nghiệp",


          title18: "Gen.2 nâng cấp toàn diện hạ tầng điện toán đám mây từ hệ thống vật lý cho tới nền tảng ảo hóa cũng như những dịch vụ mới theo xu Hướng hiện đại để giúp doanh nghiệp có một trải nghiệm mới về hạ tầng điện toán đám mây cũng như việc dịch chuyển tới hạ tầng HiGIO Cloud",

          title19: "Mô hình dịch vụ được thiết kế tùy biến và linh hoạt theo từng yêu cầu chuyên biệt, bộ nhớ ảo và tiện ích bổ sung đi kèm. Từ quy mô nhỏ cho tới quy mô lớn, chúng tôi hoàn toàn có thể đáp ứng với nhu cầu thực tế của doanh nghiệp, bên cạnh đó, cổng quản lý thông tin dễ sử dụng là một điểm cộng để giúp vận hành nhanh chóng và hiệu quả",
          title20: "Mô hình dịch vụ được thiết kế để đáp ứng các yêu cầu tuân thủ về chính sách bảo mật, thông qua các máy chủ dành riêng để đảm bảo tài nguyên của doanh nghiệp không chia sẻ với các doanh nghiệp khác",
          title21: "Giải pháp sao lưu toàn diện cho tất cả các doanh nghiệp cần bảo vệ dữ liệu trong môi trường đám mây, môi trường ảo hóa tại chỗ và máy chủ vật lý. Giải pháp này có thể sao lưu đa nền tảng như Centos, RedHat, Ubuntu, Windows,….",
          title22: "Giải pháp đồng bộ dữ liệu an toàn sang một khu vực khác (ví dụ như tại chỗ sang HIGIO cloud; HIGIO Coud HCM sang HIGIO Cloud HN hoặc ngược lại) để lấy lại quyền truy cập và chức năng nếu thảm họa có xảy ra. Hơn nữa, với giá trị tối thiểu của RPO là 5 phút phù hợp với hệ thống thiết yếu của doanh nghiệp",
          title23: "Giải pháp HI GIO cung cấp tính năng mạng và bảo mật để nâng cao hiệu suất và bảo mật cho dữ liệu, gồm các biện pháp bảo vệ chi tiết ở cấp độ máy chủ, mạng và ứng dụng như Distributed firewall, Edge firewall, Web Application Firewall (WAF), tường lửa của bên thứ ba (CheckPoint, Fortigate), Truy cập mạng không đáng tin cậy (ZTNA)",
          title24: "Giải pháp quản lý Kubernetes giúp bạn dễ dàng sử dụng Kubernetes trên HIGIO. Dịch vụ HIGIO Kubernetes tự động quản lý tính sẵn sàng và khả năng mở rộng của hệ thống duy trì bản ghi của tất cả các đối tượng Kubernetes (lên lịch cho vùng chứa, quản lý tính khả dụng của ứng dụng, lưu trữ dữ liệu cụm và các tác vụ quan trọng khác)",
          title25: "Giải pháp sử dụng để thiết lập, vận hành và mở rộng cơ sở dữ liệu mà không cần phải quản lý hạ tầng. Với DBaaS, nền tảng máy chủ chịu trách nhiệm đảm bảo chức năng cơ sở dữ liệu, bảo trì, cập nhật và cơ sở hạ tầng",
          title26: "Giải pháp lưu trữ an toàn, bảo mật cùng với khả năng đáp ứng nhu cầu truy suất dữ liệu nhanh và liên tục phù hợp cho các nhu cầu về lưu trữ phi cấu trúc như ảnh, video, trang web, dữ liệu cảm biến và tệp âm thanh. Giải pháp này sẽ phù hợp với Data Lake, Cloud-native application data, Data Archiving, Backup and Recovery",

          title27: "Khách hàng tiêu biểu",
          title28: "Các công ty đang đạt được những kết quả đáng chú ý từ việc sử dụng dịch vụ HI GIO CLOUD. Họ chia sẻ những câu chuyện sáng tạo của họ với chúng tôi",

          title29: " Việt Á Bank cung cấp đầy đủ các sản phẩm dịch vụ về tài chính. Với tầm nhìn trở thành ngân hàng TMCP tốt nhất Việt Nam, chúng tôi hiểu rằng, trong tương lai công nghệ sẽ là lợi thế cạnh tranh và làm nên sự khác biệt về chất lượng dịch vụ. Đó là lý do chúng tôi luôn chú trọng đến việc đón đầu các công nghệ hiện đại, và đẩy mạnh đầu tư vào hệ thống CNTT. Việc chuyển dịch toàn bộ hệ thống dữ liệu sang điện toán đám mây Private Cloud HI GIO CLOUD là một bước đi quan trọng về công nghệ và làm nền tảng cho xu thế Ngân hàng số mà chúng tôi hướng tới. Khả năng cung cấp dịch vụ, tốc độ xử lý thông tin và độ bảo mật là những yếu tố cực kỳ quan trọng đối với một ngân hàng. Đây cũng chính là những ưu điểm vượt trội mà dịch vụ HI GIO CLOUD mang lại. Chúng tôi tin tưởng rằng HI GIO CLOUD là sự lựa chọn tốt nhất và đáp ứng tuyệt đối các yêu cầu của Việt Á Bank.",
          title30: "Ông Nghiêm Sỹ Thắng Deputy CIO ",

          title31: "Family Mart là một trong những chuỗi cửa hàng tiện ích phổ biến nhất ở Việt Nam. Nhiệm vụ của chúng tôi là mang lại sự hài lòng và niềm tin tưởng cho khách hàng. Chúng tôi lựa chọn dịch vụ HI GIO CLOUD làm cơ sờ hạ tầng hệ thống công nghệ thông tin để triển khai và cung cấp các dịch vụ đa dạng tới các khách hàng VIP của chúng tôi và nhằm thay đổi đáng kể sự trải nghiệm dịch vụ của họ. Khả năng sẵn sàng, độ ổn định tuyệt đối cùng với nền tảng đám mây chất lượng cao là những yếu tố chính để chúng tôi quyết định lựa chọn sử dụng dịch vụ HI GIO CLOUD. Chúng tôi tin rằng dịch vụ HI GIO CLOUD là nền tảng đáng tin cậy duy nhất có thể đáp ứng được nhu cầu kinh doanh của chúng tôi.",
          title32: "Ông Takehiko Kigure",

          title33: "- Information Technology Department, Việt Á Bank",
          title34: "Tổng Giám đốc Family Mart Việt Nam",



          title35: "HI GIO Cloud không chỉ cung cấp hệ thống đáng tin cậy mà còn đảm bảo sự hỗ trợ kỹ thuật liên tục 24/7 cho toàn bộ hạ tầng CNTT của TOKYOLIFE như hệ thống core thanh toán bán hàng cho toàn bộ chuỗi (App -DB); hệ thống web thương mại điện tử; hệ thống tài chính kế toán. Với việc quản trị đơn giản thông qua Webportal, việc sử dụng HI GIO Cloud trở nên dễ dàng và thuận tiện. Đáng chú ý, HI GIO là một thương hiệu lớn được biết đến với uy tín và độ tin cậy cao trong ngành công nghệ thông tin. Với sự đảm bảo bởi FPT, một công ty công nghệ hàng đầu, người dùng có thể hoàn toàn yên tâm về mặt bảo mật thông tin và độ tin cậy của dịch vụ",
          title36: "Ông. Nguyễn Mạnh Cường ",
          title37: "CTO, ForLife Vietnam",

          title38: "Đảm bảo tối ưu chi phí, thời gian triển khai hệ thống linh hoạt hơn, tránh rủi ro mất dữ liệu, đảm bảo đc tính liên tục không bị downtime khi sử dụng hạ tầng HI GIO Cloud trên hệ thống quản trị dữ liệu nội bộ. Hạn chế được rủi ro sự cố dữ liệu bị tấn công, chi phí mua licesen chống mã độc",
          title39: "Ông. Nguyễn Tiến Thành ",
          title40: "IT Manager, InfoPlus",
        }
      },
      
    }
    
  });
  

export default i18n;
